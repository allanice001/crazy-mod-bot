const music = require("@koenie06/discord.js-music");
exports.run = async (client, interaction) => { // eslint-disable-line no-unused-vars
  const channel = interaction.member.voice.channel;
  const song = interaction.options.getString("song");
  if (!channel)
    return interaction.reply({
      content: "You need to be in a voice channel!",
      ephemeral: true
    });

  music.play({
    interaction: interaction,
    channel: channel,
    song: song
  });

  return interaction.reply({
    content: "Search for the music...",
    ephemeral: true
  });
}

exports.commandData = {
  name: "play",
  description: "Play Music With Link Or Playlist Or Query!",
  options: [{
    name: "song",
    description: "Song Name",
    type: "STRING",
    required: true
  }],
  P_bot: ["CONNECT", "SPEAK"],
  defaultPermission: true,
};

// Set guildOnly to true if you want it to be available on guilds only.
// Otherwise false is global.
exports.conf = {
  permLevel: "User",
  guildOnly: true
};