FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:webpack

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
