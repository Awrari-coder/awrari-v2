import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || 
  (process.env.NODE_ENV === "production" 
    ? ['https://awraribusinesssolution.replit.app']
    : ['*']);

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Configure CORS
  const origin = req.headers.origin;
  if (process.env.NODE_ENV !== "production" || (origin && allowedOrigins.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  next();
});

// Request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
  });
  next();
});

async function startServer(port: number, retries = 3): Promise<void> {
  try {
    const server = await registerRoutes(app);

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      console.error(err);
    });

    if (process.env.NODE_ENV !== "production") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    return new Promise((resolve, reject) => {
      server.listen(port, "0.0.0.0")
        .once('listening', () => {
          log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
          resolve();
        })
        .once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE' && retries > 0) {
            log(`Port ${port} in use, trying port ${port + 1}...`);
            server.close();
            startServer(port + 1, retries - 1).then(resolve).catch(reject);
          } else {
            reject(err);
          }
        });
    });
  } catch (error) {
    log('Failed to start server:', error);
    throw error;
  }
}

// Start server with initial port
const initialPort = parseInt(process.env.PORT || "5000", 10);
startServer(initialPort).catch((error) => {
  console.error('Failed to start server after all retries:', error);
  process.exit(1);
});