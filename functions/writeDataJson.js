const fs = require('fs');

function writeDataJson(data) {
    fs.writeFile('data/db.json', data, function (error) {
        if (error) console.log(error);
        console.log("Veri eklendi.");
    })
}

module.exports = writeDataJson;