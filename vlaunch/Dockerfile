FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist/vlaunch/. /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
