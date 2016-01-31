#! /bin/sh

rm -rf ../deploy/frontend/*
rm -rf ../deploy/frontend/.git

rsync -a -r --verbose --exclude 'deploy' --exclude 'node_modules' --exclude 'bower_components' --include '.buildpacks' . ../deploy/frontend/

cd ../deploy/frontend
git init
git add -A
git commit -m "Commit for heroku!"

heroku login

heroku git:remote -a tekis-jobboard
heroku buildpacks:set https://github.com/ddollar/heroku-buildpack-multi.git

git push heroku master -f
