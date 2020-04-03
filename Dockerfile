FROM nginx:alpine

COPY __sapper__/export/. /usr/share/nginx/html

COPY nginx.conf /etc/nginx/sites-enabled/default.conf