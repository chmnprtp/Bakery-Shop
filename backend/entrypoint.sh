#!/bin/sh

# Wait for database to be ready
echo "Waiting for database to be ready..."
# Use prisma validate as a lightweight check to see if we can connect to the DB
until npx prisma validate > /dev/null 2>&1; do
  echo "Database is unavailable or not ready - sleeping"
  sleep 2
done

# Run migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Start the server
echo "Starting server..."
node server.js
