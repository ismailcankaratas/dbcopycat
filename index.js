#!/usr/bin/env node

/**
 * dbcopycat
 * A JSON Database that saves your json data in a file. Easy and Simple to Use
 *
 * @author İsmail Can Karataş <https://ismailcankaratas.github.io/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const initdb = require('./helpers/initdb');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	input.includes(`init`) && initdb();

	debug && log(flags);

})();
