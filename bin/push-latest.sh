#!/bin/sh
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
    pip install --user awscli
    export PATH=$PATH:$HOME/.local/bin
    eval $(awc ecr get-login --region us-west-2)
    docker-compose build -f ./config/production/docker-compose.yml
    docker tag maestro/web:latest 272378791211.dkr.ecr.us-west-2.amazonaws.com/maestro/web:latest
    docker push 272378791211.dkr.ecr.us-west-2.amazonaws.com/maestro/web:latest
    printf "Pushed latest master commit to maestro/web:latest\n"
fi
exit 0
