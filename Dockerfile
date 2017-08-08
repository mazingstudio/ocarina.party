# Base OS
FROM debian:jessie

# About
MAINTAINER Julio Montaño "julio@mazing.studio"

# Install everything
RUN apt-get update
RUN apt-get install -y sudo ca-certificates curl nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Copy files
COPY dist/ /app

COPY docker-files/default.conf /etc/nginx/sites-available/

# Nginx config
RUN ln -sf /etc/nginx/sites-available/default.conf \
  /etc/nginx/sites-enabled/default

# Open port 80
EXPOSE 80

# Start Nginx
CMD service nginx start
