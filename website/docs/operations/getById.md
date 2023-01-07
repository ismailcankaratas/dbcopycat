---
sidebar_position: 2
---

# getById(arrayName, dataId)

Returns data that matches the id `dataId` in `arrayName` in the db.json file.

**Returns the data that matches the data id**

```bash
const dbcopycat = require('dbcopycat');
const data = dbcopycat.getById(arrayName, dataId);
console.log(data)
```