FROM nginx:stable-alpine

COPY public/. /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf