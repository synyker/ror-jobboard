#! /bin/sh

rm -rf ../deploy/backend/*
rm -rf ../deploy/backend/.git

rsync -a -r --verbose --exclude 'deploy' --exclude 'node_modules' --exclude 'bower_components' --include '.buildpacks' . ../deploy/backend/

cd ../deploy/backend
git init
git add -A
git commit -m "Commit for heroku!"

heroku login

heroku git:remote -a guarded-woodland-53389
#heroku buildpacks:set https://github.com/ddollar/heroku-buildpack-multi.git

git push heroku master -f
