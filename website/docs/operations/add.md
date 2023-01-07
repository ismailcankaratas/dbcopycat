---
sidebar_position: 3
---

# add(arrayName, data)

It performs the process of adding data to the json database.


**Attention:** dont forget to add the id key to your data!

```bash
const dbcopycat = require("dbcopycat");

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