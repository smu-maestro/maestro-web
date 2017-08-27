#!/usr/bin/env bash
WEB_UP=false;
BACKEND_UP=false;
DB_UP=false;

if docker-compose -f $1 exec maestro-web echo "Hello" >/dev/null 2>&1; then
    WEB_UP=true
fi
if docker-compose -f $1 exec maestro-backend echo "Hello" >/dev/null 2>&1; then
    BACKEND_UP=true
fi
if docker-compose -f $1 exec mongo-db echo "Hello" >/dev/null 2>&1; then
    DB_UP=true
fi
printf "[x] = running\n\n";
if $WEB_UP; then
    printf "[x]  Web";
else
    printf "[ ]  Web";
fi
printf "\n";
if $BACKEND_UP; then
    printf "[x]  Backend";
else
    printf "[ ]  Backend";
fi
printf "\n";
if $DB_UP; then
    printf "[x]  Mongo";
else
    printf "[ ]  Mongo";
fi
printf "\n\n";
exit;
