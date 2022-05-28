const getAllData = require("./getAllData");

function removeData() {
    const data = getAllData();
    console.log(data);
}

removeData();

module.exports = removeData;