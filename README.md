# node-boilerplate
NodeJs Boilerplate is an efficient boilerplate or bootstrap framework for node.js. Try NodeJs Boilerplate and enhance your project's performance.


**Welcome to NodeJs Boilerplate by Bykea**

NodeJs Boilerplate is an efficient boilerplate or bootstrap framework for node.js. Try NodeJs Boilerplate and enhance your project's performance.

# Unit test cases

## Setup

> npm install jest --save-dev

## Running

> npm run test:unit

**Motivation**

One of the main objectives of this project is to give a starting point to node.js developers with high performance.


**License**

For your convenience, here is a list of all the licenses of our production dependencies:
MIT


**Quick start**

    gh repo clone bykea/node-boilerplate
    npm install
    npm run my-local




**Contributions**

Bykea always welcome contributions. If you have a suggestion or an idea, please open a Github issue to get some feedback before you start implementing, to make sure that the maintainers are ready to accept it.


**cURL Requests for Demo**

###### Populate "matches" table in the database
```bash
psql docker -h localhost -p 7778 -d bykea_acm -a -f src/db_scripts/epl_matches.sql

```
###### For DELETE
```bash
curl -X DELETE http://localhost:3000/v1/match/erase/TOTCHE
```
###### For CREATE
```bash
curl -X POST -H "Content-Type: application/json" \
    -d '{"match_week": 6, "home_team": "MUN", "away_team": "AVL", "stadium": "Old Trafford", "code": "MUNAVL"}' \
    http://localhost:3000/v1/match/add
```
###### For UPDATE
```bash
curl -X POST -H "Content-Type: application/json" \
    -d '{"match_week": 6, "code": "NEWLEE"}' \
    http://localhost:3000/v1/match/update
```
