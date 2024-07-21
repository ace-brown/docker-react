# Build stage
FROM node:16-alpine as Builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Prod stage
FROM nginx:1.19-alpine

COPY --from=Builder /app/build /usr/share/nginx/html






