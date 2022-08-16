FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:webpack

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
