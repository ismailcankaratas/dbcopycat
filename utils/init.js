const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `dbcopycat`,
		tagLine: `by İsmail Can Karataş`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#4db5ff',
		color: '#ffff',
		bold: true,
		clear
	});
};
