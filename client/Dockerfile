# Use a Node image to build the app
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app with Vite
RUN npm run build

# Use a lightweight NGINX web server to serve static files
FROM nginx:alpine

# Copy the built files from the previous stage to NGINX public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
