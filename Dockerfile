FROM nginx

#COPY ./files /usr/share/nginx/html/files

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
