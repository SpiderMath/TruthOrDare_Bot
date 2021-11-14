const { Client, Intents, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const Logger = require("./Logger");

// eslint-disable-next-line no-unused-vars
const BaseEvent = require("./BaseEvent");
// eslint-disable-next-line no-unused-vars
const BaseCommand = require("./BaseCommand");

module.exports = class TruthOrDareClient extends Client {
	constructor() {
		super({
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MEMBERS,
			]
		});

		this.logger = new Logger();
		this.commands = new Collection();
	}

	async start() {
		// Loading client events
		await this.__loadEvents();

		// Loading client commands
		await this.__loadCommands();

		// Logging in as the discord bot
		this.login(process.env.DISCORD_TOKEN);
	}

	async __loadCommands() {
		const fileNames = await readdirSync(
			join(__dirname, "../Commands/"),
		);

		for(const fileName of fileNames) {
			/**
			 * @type {BaseCommand}
			 */
			let pull = new (require(
				join(__dirname, `../Commands/${fileName}`),
			)) (this);

			this.commands.set(pull.name, pull);

			this.logger.success("client/command", `Loaded command ${pull.config.name}`);
		}
	}

	async __loadEvents() {
		const fileNames = await readdirSync(
			join(__dirname, "../Events/"),
		);

		for(const fileName of fileNames) {
			/**
			 * @type {BaseEvent}
			 */
			let pull = new (require(
				join(__dirname, `../Events/${fileName}`),
			)) (this);

			this.on(pull.name, async (...args) => await pull.run(...args));
			this.logger.success("client/events", `Listening for event ${pull.name}`);
		}
	}
};