const akinator = require("discord.js-akinator");

exports.run = async (client, message, args) => {
  akinator(message, client, args);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "aki",
  category: "Games",
  usage: "aki"
};