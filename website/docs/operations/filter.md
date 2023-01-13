---
sidebar_position: 6
---

# filter(arrayName, condition)

Filters data in `arrayName` in db.json by `condition`

**Filters data by condition**

```js
const dbcopycat = require('dbcopycat');
const data = dbcopycat.filter("arrayName", x => x.quantity == 5);
console.log(data);
```