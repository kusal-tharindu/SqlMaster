# Use Node.js official image from DockerHub
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the server code into the container
COPY . .

# Expose port 3002 for the Express server
EXPOSE 3002

# Start the Express server
CMD ["node", "index.js"]
