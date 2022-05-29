const fs = require('fs');

function getAllData() {
    const data = fs.readFileSync("./data/db.json");
    return JSON.parse(data);
}

module.exports = getAllData;
