const dataFilter = require('../helpers/dataFilter');

function filter(arrayName, condition) {
    return dataFilter(arrayName, condition);
}

module.exports = filter;
