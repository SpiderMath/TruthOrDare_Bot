// eslint-disable-next-line no-unused-vars
const TruthOrDareClient = require("./Client");

module.exports = class BaseEvent {
	/**
	 * @param {keyof import("discord.js").ClientEvents} name
	 * @param {TruthOrDareClient} client 
	 */
	constructor(name, client) {
		this.name = name;
		this.client = client;

		Object.defineProperty(this, "name", {
			configurable: true,
			writable: true,
			enumerable: false,
		});
		
		Object.defineProperty(this, "client", {
			configurable: true, 
			writable: true,
			enumerable: false,
		});
	}
};