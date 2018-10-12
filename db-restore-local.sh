#!/usr/bin/env bash
#mongodump --host ds243325.mlab.com -d heroku_4p6q9gwj --port 43325 --username heroku_4p6q9gwj --password 3vkbmr6vk2k8vn21s4keeja02i
#mongo tagminepenge-cms --eval "db.dropDatabase()"
#mongorestore -h localhost -d tagminepenge-cms dump/heroku_4p6q9gwj
#rm -r -f dump

mongodump --host ds115596-a0.mlab.com -d heroku_xk5j0zfc --port 15596 --username heroku_xk5j0zfc --password ieffo6rjk885c38mtq3dvl1qs3
mongo tagminepenge-cms --eval "db.dropDatabase()"
mongorestore -h localhost -d tagminepenge-cms dump/heroku_xk5j0zfc
rm -r -f dump
