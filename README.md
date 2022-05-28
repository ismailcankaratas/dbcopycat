# What is dbcopycat

A JSON Database that saves your json data in a file. Easy and Simple to Use

# Getting started

Install Database Copycat

``` 
npm i -g dbcopycat
```

Then...

```
dbcopycat init
```
Generates a `db.json` file with some data
# Commands

## Add

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

dbcopycat.add("products", data);
```

Will be added...