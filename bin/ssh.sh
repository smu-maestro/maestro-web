#!/usr/bin/env bash
docker-compose -f $1 exec $2 /bin/ash
