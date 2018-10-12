#!/usr/bin/env bash
#mongodump --db tagminepenge-cms
#cd dump/
#mv tagminepenge-cms/ dump
#mongo ds243325.mlab.com:43325/heroku_4p6q9gwj -u heroku_4p6q9gwj -p 3vkbmr6vk2k8vn21s4keeja02i --eval  "db.getCollectionNames().forEach(function(n){db[n].remove({})});"
#mongorestore -h ds243325.mlab.com:43325 -d heroku_4p6q9gwj -u heroku_4p6q9gwj -p 3vkbmr6vk2k8vn21s4keeja02i
#rm -r -f dump

#mongodb://heroku_xk5j0zfc:ieffo6rjk885c38mtq3dvl1qs3@ds115596-a0.mlab.com:15596,ds115596-a1.mlab.com:15596/heroku_xk5j0zfc?replicaSet=rs-ds115596

mongodump --db tagminepenge-cms
cd dump/
mv tagminepenge-cms/ dump
mongo ds115596-a0.mlab.com:15596/heroku_xk5j0zfc -u heroku_xk5j0zfc -p ieffo6rjk885c38mtq3dvl1qs3 --eval  "db.getCollectionNames().forEach(function(n){db[n].remove({})});"
mongorestore -h ds115596-a0.mlab.com:15596 -d heroku_xk5j0zfc -u heroku_xk5j0zfc -p ieffo6rjk885c38mtq3dvl1qs3
rm -r -f dump

