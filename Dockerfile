# syntax=docker/dockerfile:1
FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN ls -al
RUN npm install
COPY . ./
CMD ["npm", "start"]