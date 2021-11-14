// eslint-disable-next-line no-unused-vars
const TruthOrDareClient = require("./Client");

module.exports = class BaseCommand {
	/**
	 * 
	 * @param {TruthOrDareClient} client 
	 * @param {import("discord.js").ApplicationCommandData} config 
	 */
	constructor(client, config) {
		this.config = config;
		this.client = client;

		Object.defineProperty(this, "config", {
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