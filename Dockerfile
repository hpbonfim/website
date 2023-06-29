# Stage 1: Build
FROM node:current-slim AS build

WORKDIR /website

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Build project
RUN npm run build

# Stage 2: Serve build artifacts with Nginx
FROM nginx:alpine-slim

# Copy built assets from build stage
COPY --from=build /website/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
