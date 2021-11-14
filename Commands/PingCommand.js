const { MessageEmbed } = require("discord.js");
const BaseCommand = require("../Base/BaseCommand");

module.exports = class PingCommand extends BaseCommand {
	constructor(client) {
		super(client, {
			name: "ping",
			description: "Gets the API Latency of the bot",
		});
	}

	/**
	 * @param {import("discord.js").CommandInteraction} interaction 
	 */
	async run(interaction) {
		return interaction.reply({
			embeds: [
				new MessageEmbed()
					.setTitle("Ping")
					.setDescription(Date.now() - interaction.createdTimestamp + " ms"),
			],
		});
	}
};