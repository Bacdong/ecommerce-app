#!/bin/bash

IMAGE="lavisdecorweb"
VERSION="test"

# Build docker image
read -p "Do you want to build and export docker image? Press y or yes to allow: " yn
if [ "$yn" == "y" ] || [ "$yn" == "Y" ] || [ "$yn" == "yes" ] || [ "$yn" == "YES" ]; then
    docker build -t $IMAGE:$VERSION ../../vlaunch
    docker save -o $IMAGE-$VERSION.tar $IMAGE:$VERSION
fi

# Import image into docker
read -p "Do you want to import docker image into server? Press y or yes to allow: " yn
if [ "$yn" == "y" ] || [ "$yn" == "Y" ] || [ "$yn" == "yes" ] || [ "$yn" == "YES" ]; then
    scp -r ./$IMAGE-$VERSION.tar centos@lavisdecor.aws:/tmp
    ssh -t centos@lavisdecor.aws "cd /tmp && sudo docker load --input $IMAGE-$VERSION.tar && rm -rf $IMAGE-$VERSION.tar"
fi

# Start web
read -p "Do you want to start web? Press y or yes to allow: " yn
if [ "$yn" == "y" ] || [ "$yn" == "Y" ] || [ "$yn" == "yes" ] || [ "$yn" == "YES" ]; then
    scp -r ./start_web.sh centos@lavisdecor.aws:/tmp
    ssh -t centos@lavisdecor.aws "cd /tmp && sudo bash start_web.sh && rm -rf start_web.sh"
fi
