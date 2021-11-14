module.exports = class Logger {
	constructor() {
		this.ansiCodes = {
			red : "\x1b[31m",
			green : "\x1b[32m",
			yellow : "\x1b[33m",
			blue : "\x1b[34m",
			reset : "\u001b[0m",
		};
	}

	__getTimestamp() {
		return new Date().toUTCString();
	}

	success(ctx, msg) {
		console.log(`${this.ansiCodes.green}${this.__getTimestamp()} ${ctx}: ${this.ansiCodes.reset}${msg}`);
	}

	error(ctx, msg, stack) {
		console.log(`${this.ansiCodes.red}${this.__getTimestamp()} ${ctx}: ${this.ansiCodes.reset}${msg} \n${this.ansiCodes.red} Stack Trace: ${this.ansiCodes.reset}${stack}`);
	}

	info(ctx, msg) {
		console.log(`${this.ansiCodes.blue}${this.__getTimestamp()} ${ctx}: ${this.ansiCodes.reset}${msg}`);
	}

	warn(ctx, msg) {
		console.log(`${this.ansiCodes.yellow}${this.__getTimestamp()} ${ctx}: ${this.ansiCodes.reset}${msg}`);
	}
};