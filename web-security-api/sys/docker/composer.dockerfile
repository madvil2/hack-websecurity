FROM composer:latest

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

RUN composer config --global cafile /etc/ssl/cert.pem

WORKDIR /var/www/html