# What is dbcopycat

A JSON Database that saves your Json data in a file and makes it easy for you to perform CRUD operations.

<!-- TOC -->
- [Motivation](#motivation)
- [Features](#features)
- [Getting started](#getting-started)
    - [Installation](#install-database-copycat)
    - [Commands](#commands)
        - [getall()](#getall)
        - [getById(arrayName, dataId)](#getbyidarrayname-dataid)
        - [add(arrayName, data)](#addarrayname-data)
        - [deleteById(arrayName, dataId)](#deletebyidarrayname-dataid)
        - [update(arrayName, data)](#updatearrayname-data)
        - [filter(arrayName, condition)](#filterarrayname-condition)
        - [find(arrayName, condition)](#findarrayname-condition)
- [License](#license)
<!-- TOC -->

# Motivation

In small web projects, database connection is `very troublesome and unnecessary` in projects we usually do to improve ourselves. That's why we make use of `static json` files. Why don't we make our static json file `dynamic` with minimal code?

# Features

- Make your `static json` file `dynamic`.
- Get persistent json data.
- Get rid of database fees and hassle.
- It is so fast compared to other databases that it behaves as if it is a static data. 'NO WAITING TIME'.

# Getting started

Start converting your static json file to dynamic json file!
## Install Database Copycat

```sh
$ npm i -g dbcopycat
```

Then...

```sh
$ dbcopycat init
```
Generates a `db.json` file with some data
# Commands
##  getAll()
Fetch all data

```js
const dbcopycat = require('dbcopycat');

var data = dbcopycat.getAll();
``` 

##  getById(arrayName, dataId)
Returns the data that matches the data id

```js
const dbcopycat = require('dbcopycat');

dbcopycat.getById(arrayName, dataId);
```

##  add(arrayName, data)
Adds data to data
```js
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

##  deleteById(arrayName, dataId)
Deletes data that matches the data ID

```js
const dbcopycat = require('dbcopycat');

dbcopycat.deleteById(arrayName, dataId);
```

##  update(arrayName, data)
Updates data that matches the data id

```js
const dbcopycat = require('dbcopycat');

dbcopycat.update(arrayName, data);
```

##  filter(arrayName, condition)
Filters data by condition

```js
const dbcopycat = require('dbcopycat');

dbcopycat.filter("arrayName", x => x.id == 1)
```

##  find(arrayName, condition)
Returns a single data suitable for the condition

```js
const dbcopycat = require('dbcopycat');

dbcopycat.find("arrayName", x => x.categoryid == 1)
```

## License

MIT
