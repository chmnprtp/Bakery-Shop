FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Finalize entrypoint
RUN chmod +x entrypoint.sh

EXPOSE 5002

CMD ["./entrypoint.sh"]
