var fs = require('fs');
function dataControl() {
    if (fs.existsSync("/data/db.json")) {
        console.log(true);
    } else {
        console.log(process.cwd());
    }
}
dataControl()
module.exports = dataControl;