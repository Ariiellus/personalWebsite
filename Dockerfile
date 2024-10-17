FROM nginx:latest

# Path: /usr/share/nginx/html
COPY ./personalWebsite.html /usr/share/nginx/html/index.html
