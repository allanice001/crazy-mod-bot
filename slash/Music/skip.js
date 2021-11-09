const music = require("@koenie06/discord.js-music");
exports.run = async (client, interaction) => { // eslint-disable-line no-unused-vars
  const isConnected = await music.isConnected({
    interaction: interaction
  });
  if (!isConnected)
    return interaction.reply({
      content: "There are no songs playing",
      ephemeral: true
    })

  music.skip({interaction: interaction})
  interaction.reply({ content: `Skipped the song` });
}

exports.commandData = {
  name: "skip",
  description: "Skip The Music!",
  options: [],
  P_bot: ["CONNECT", "SPEAK"],
  defaultPermission: true,
};

// Set guildOnly to true if you want it to be available on guilds only.
// Otherwise false is global.
exports.conf = {
  permLevel: "User",
  guildOnly: true
};