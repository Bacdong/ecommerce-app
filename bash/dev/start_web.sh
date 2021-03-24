#!/bin/bash

DOCKER_IMAGE=lavisdecorweb:test
CONTAINER_NAME=lavisdecor_aws
DOMAIN=lavisdecor.aws

PORT=127.0.0.1:8002

echo Delete old container...
docker rm -f $CONTAINER_NAME

echo Run new container...
docker run -d \
    --name=$CONTAINER_NAME \
    -p $PORT:80 \
    $DOCKER_IMAGE
