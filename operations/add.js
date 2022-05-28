const fs = require('fs');

const writeDataJson = require("../helpers/writeDataJson");

function add(tableName, data) {
    fs.readFile("data/db.json", function (error, fileData) {
        if (error) console.log(error);
        var newData = JSON.parse(fileData);
        newData[tableName].push(data);
        writeDataJson(JSON.stringify(newData));
    })
}

module.exports = add;

