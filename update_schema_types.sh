#!/bin/bash

cd backend
npx prisma generate

create () {
    if [ ! -d $1 ]
        then mkdir $1
    fi
}

create ../frontend/src/types

cp ../node_modules/.prisma/client/index.d.ts ../frontend/src/types/prisma.d.ts