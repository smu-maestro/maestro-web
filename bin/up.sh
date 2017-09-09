#!/usr/bin/env bash
docker-compose -f $1 up -d
docker-compose -f $1 exec maestro-web npm run dev
