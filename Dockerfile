FROM nginx:alpine

COPY dist/ui/. /usr/share/nginx/html

#USER 1001
