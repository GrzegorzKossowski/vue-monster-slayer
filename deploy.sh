#!/usr/bin/env sh

# abort on errors
set -e

# wpisz message dla gita
read -p "Enter git message : " gitmsg

# build
npm run build

# navigate into the build output directory
cd dist
echo '# vue-monster-slayer
Simple Vue monster slayer application.
See [online version](https://grzegorzkossowski.github.io/vue-monster-slayer/).
' > README.md

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
#git commit -m 'deploy'
git commit -m "$gitmsg"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:grzegorzkossowski/vue-monster-slayer.git master:master

cd -
