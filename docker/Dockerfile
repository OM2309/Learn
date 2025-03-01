# Base Image
# FROM ubuntu

# Update package list and install curl
# RUN apt-get update
# RUN apt-get install -y curl

# Install Node.js
# RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
# RUN bash /tmp/nodesource_setup.sh
# RUN apt-get install -y nodejs

# Set working directory
# WORKDIR /home/app/

# Copy project files source to the working directory
# COPY index.js index.js
# COPY package-lock.json package-lock.json
# COPY package.json package.json

# Install dependencies
# RUN npm install



# Optimize a docker file
# Base Image
FROM node:20.17.0-alpine3.19

# Set working directory
WORKDIR /home/app/

# Copy project files
COPY package*.json .


# Install dependencies
RUN npm install

# Copy project files
COPY index.js /home/app/index.js

# Execute command
CMD [ "npm" ,"start" ]


