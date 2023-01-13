---
sidebar_position: 7
---

# find(arrayName, condition)

In db.json, it returns the appropriate data according to `condition` from the data in arrayName`

**Returns a single data suitable for the condition**

```js
const dbcopycat = require('dbcopycat');
const data = dbcopycat.find("arrayName", x => x.id == 1)
console.log(data);
```