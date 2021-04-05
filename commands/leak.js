const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const embedCreated = new Discord.MessageEmbed()
  
  .setColor('RANDOM')
  .setImage('https://cdn.discordapp.com/attachments/791612061196484659/792030055345553428/unknown.png')

  .setTimestamp()
  message.channel.send(embedCreated)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["leakfortnite"],
  permLevel: "User",
};

exports.help = {
  name: "leak",
  category: "**Bot**",
  description: "**Affiche toutes les commandes disponibles**",
  usage: "leak",
};
