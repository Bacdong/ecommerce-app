#!/bin/bash

DOMAIN="lavisdecor.aws"

cat ./nginx/ssl/certificate.crt > ./nginx/ssl/ssl_bundle.crt
echo '' >> ./nginx/ssl/ssl_bundle.crt
cat ./nginx/ssl/ca_bundle.crt  >> ./nginx/ssl/ssl_bundle.crt

scp -r ./nginx centos@lavisdecor.aws:/tmp


ssh -t centos@lavisdecor.aws "sudo cp -rf /tmp/nginx/nginx.conf /etc/nginx/sites-available/$DOMAIN.conf && sudo mkdir -p /var/www/.well-known/pki-validation && sudo cp -rf /tmp/nginx/well-known/pki-validation/* /var/www/.well-known/pki-validation && sudo mkdir -p /etc/nginx/ssl/$DOMAIN && sudo cp -rf /tmp/nginx/ssl/* /etc/nginx/ssl/$DOMAIN && cd /etc/nginx/sites-enabled && sudo ln -sf ../sites-available/$DOMAIN.conf . && sudo nginx -t && sudo nginx -s reload && sudo rm -rf /tmp/nginx"
