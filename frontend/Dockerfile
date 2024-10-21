FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the working directory
COPY package.json ./

# Install the dependencies
RUN npm i

# Copy all the frontend files to the container
COPY . .

# Build the frontend project
RUN npm run build

# Stage 2: Serve the frontend with a lightweight web server
FROM nginx:alpine

# Copy built files from the builder stage to the nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
