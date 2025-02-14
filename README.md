# Awrari Digital Solutions Platform

A modern web application for digital business solutions, built with React and Express.

## Features

- 🎨 Modern UI with Tailwind CSS and Framer Motion animations
- 🔒 Secure authentication system
- 💼 Business services showcase
- 📱 Responsive design
- 🗃️ PostgreSQL database with Drizzle ORM
- 🚀 Real-time updates with React Query

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS, Framer Motion
- Backend: Express.js, Node.js
- Database: PostgreSQL with Drizzle ORM
- Authentication: Passport.js with session management
- State Management: TanStack Query (React Query)

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and configurations
│   │   └── pages/       # Page components
├── server/              # Backend Express application
│   ├── auth.ts         # Authentication setup
│   ├── routes.ts       # API routes
│   └── storage.ts      # Database interactions
└── shared/             # Shared types and schemas
    └── schema.ts       # Database schema and types
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/awrari-digital.git
   cd awrari-digital
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   DATABASE_URL=your_postgresql_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes

## Deployment

The application is configured to deploy on Replit, but can be deployed to any platform that supports Node.js and PostgreSQL.

## License

MIT
