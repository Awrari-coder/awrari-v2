# Setup Guide

## Prerequisites

- Node.js 18+ (LTS version recommended)
- PostgreSQL database
- npm or yarn package manager

## Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/awrari-digital.git
   cd awrari-digital
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   - Copy `.env.example` to `.env`
   - Update the variables with your local configuration

4. Start the development server:
   ```bash
   npm run dev
   ```

## Database Setup

1. Create a PostgreSQL database
2. Update DATABASE_URL in your `.env` file
3. Run database migrations:
   ```bash
   npm run db:push
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Update database schema

## Environment Variables

See `.env.example` for required environment variables and their descriptions.

## Deployment

The application is configured for deployment on Replit but can be deployed to any platform that supports Node.js and PostgreSQL.
