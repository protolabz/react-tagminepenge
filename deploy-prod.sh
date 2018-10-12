#!/bin/bash
#patrick_knudsen78@hotmail.com/jamdido34zam!
heroku config:set NPM_CONFIG_PRODUCTION=false --app tagminepenge
git remote remove heroku-prod
git remote add heroku-prod https://git.heroku.com/tagminepenge.git
if test "$*"
then
    ./commit.sh $*
fi
git push heroku-prod master
