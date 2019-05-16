FROM node:6.11.3

# Yarn is already installed from the base image

# Install global dependencies
RUN yarn global add pm2

# Copy package.json and yarn.lock, change working directory
RUN mkdir -p /sales-leader-front
COPY ./package.json ./yarn.lock /sales-leader-front/
WORKDIR /sales-leader-front

# Install app dependencies
RUN yarn install

# Bundle app source and build assets
COPY . /sales-leader-front
RUN yarn run build

# Open the server port
EXPOSE 8080

# Run the server under pm2
CMD ["pm2-docker", "process.yml"]
