# Base Image
FROM ubuntu

# Update package list and install curl
RUN apt-get update
RUN apt-get install -y curl

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt-get install -y nodejs

# Set working directory
WORKDIR /home/app/

# Copy project files
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

# Install dependencies
RUN npm install
