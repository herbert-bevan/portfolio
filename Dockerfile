# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app

# UPDATE NPM FIRST: This fixes the native binding Issue #4828
RUN npm install -g npm@latest

# Copy package config and install fresh
COPY package.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
