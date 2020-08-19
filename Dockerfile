#First stage to build docker
FROM node as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

#Second stage to add build content to nginx
FROM nginx:1.15-alpine-perl
COPY --from=build-stage /app/dist/cloud-test-app /var/www
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
