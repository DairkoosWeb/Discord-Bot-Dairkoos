const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    const member =
    message.mentions.users.first() ||
    message.guild.members.cache.find(x => x.name === `${args.join(" ")}`) ||
    message.author;

  const embed = new MessageEmbed()
    .addField(`Pseudo`, member.tag, true)
    .addField(`ID`, member.id, true)
    .setColor('RANDOM')
    .setTimestamp();

  message.channel.send(embed);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "userid",
  category: "**Bot**",
  description: "**Affiche toutes les commandes disponibles**",
  usage: "userid",
};