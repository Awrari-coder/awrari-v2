#!/bin/bash

# Development environment setup script

# Check if .env exists, if not create it from example
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from .env.example"
fi

# Install dependencies
npm install

# Run database migrations
npm run db:push

echo "Development environment setup complete!"
