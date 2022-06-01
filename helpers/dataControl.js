const fs = require('fs');

function statPath(path) {
    try {
        return fs.statSync(path);
    } catch (ex) { }
    return false;
}

function dataControl() {
    var exist = statPath('./data/db.json');
    if (exist && exist.isFile()) {
        return true
    } else {
        return false
    }
}
module.exports = dataControl;