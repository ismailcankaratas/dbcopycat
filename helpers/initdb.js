const fs = require('fs');

function init() {
    fs.mkdir('data', function (error) {
        if (error) console.log(error);
        console.log('Data folder created.');
    });

    fs.writeFile('data/db.json', `{
    "products": [
        {
            "id": 1,
            "categoryId": 2,
            "productName": "Chai",
            "quantityPerUnit": "48 - 6 oz jars",
            "unitPrice": "30",
            "unitsInStock": 53
        }
    ]
}`, function (error) {
        if (error) console.log(error);
        console.log("db.json created.");
    })
}

module.exports = init;
