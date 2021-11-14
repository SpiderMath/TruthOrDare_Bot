const BaseEvent = require("../Base/BaseEvent");

module.exports = class ReadyEvent extends BaseEvent {
	constructor(client) {
		super("ready", client);
	}

	async run() {
		this.client.logger.success("client", `Logged in as ${this.client.user.tag}`);
	}
};