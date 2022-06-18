# What is dbcopycat ?

A JSON Database that saves your JSON data in a file and makes it easy for you to perform CRUD operations.

# ⚡️Abilities
- Creates the file where the json data is kept in the main directory.
- Adds easy and persistent data to json.
- Deletes data in json.
- Updates data in json.
- Retrieves data in json.
- Fetch data by id in json

# Getting started

### Install Database Copycat

``` 
npm i -g dbcopycat
```

Then...

```
dbcopycat init
```
Generates a `db.json` file with some data
# Commands
## :blue_square: getAll()
Fetch all data

```
const dbcopycat = require('dbcopycat');

var data = dbcopycat.getAll();
``` 

## :blue_square: getById(arrayName, dataId)
Returns the data that matches the data id

```
const dbcopycat = require('dbcopycat');

dbcopycat.getById(arrayName, dataId);
```

## :blue_square: add(arrayName, data)
Adds data to data
```
const dbcopycat = require('dbcopycat');

var data = {
    "id": 2,
    "categoryId": 1,
    "productName": "Chang",
    "quantityPerUnit": "24 - 12 oz bottles",
    "unitPrice": "21",
    "unitsInStock": 17
}

dbcopycat.add("arrayName", data);
```

## :blue_square: deleteById(arrayName, dataId)
Deletes data that matches the data ID

```
const dbcopycat = require('dbcopycat');

dbcopycat.deleteById(arrayName, dataId);
```

## :blue_square: update(arrayName, data)
Updates data that matches the data id

```
const dbcopycat = require('dbcopycat');

dbcopycat.update(arrayName, data);
```

## :blue_square: filter(arrayName, condition)
Filters data by condition

```
const dbcopycat = require('dbcopycat');

dbcopycat.filter("arrayName", x => x.id == 1)
```

## :blue_square: find(arrayName, condition)
Returns a single data suitable for the condition

```
const dbcopycat = require('dbcopycat');

dbcopycat.find("arrayName", x => x.categoryid == 1)
```
