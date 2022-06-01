const alert = require('cli-alerts');

module.exports = (msg, title, type, info) => {
	alert({
		type: type,
		name: title,
		msg: msg
	});
	if (info) console.log(info);
};
