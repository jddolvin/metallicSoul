// Run dotenv
require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  console.log(interaction);

  const { commandName } = interaction;
  switch (commandName) {
    case "ping":
      await interaction.reply("Pong!");
      break;
    case "server":
      await interaction.reply(
        `This is the only server with a cool ass bot like me!\n Server name: ${interaction.guild.name}\n Total members: ${interaction.guild.memberCount}`
      );
      break;
    case "user":
      await interaction.reply(
        `Your tag: ${interaction.user.tag}\n Your id: ${interaction.user.id}`
      );
      break;
  }
});
client.login(process.env.DISCORD_TOKEN);
