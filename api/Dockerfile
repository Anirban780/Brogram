FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files (including main.js) to the container
COPY . .

# Expose the port your app listens on
EXPOSE ${PORT:-3000}

# Start the application
CMD ["npm", "start"]
