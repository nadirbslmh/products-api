#!/bin/sh

# init project
npm init

# install dependencies
npm install express
npm install --save-dev nodemon
npm install --save-dev prisma

# init db
npx prisma init
npx prisma migrate dev --name init