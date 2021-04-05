const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  
      if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send({embed: {
        color: "RED",
        description: "Vous n'avez pas permission de faire cette commande."
      }});
      if(!args[0])
      return message.reply({embed: {
        color: "RANDOM",
        description: "Vous devez fournir un message afin que le bot puissent le dire."
      }});
      message.delete().catch;
      let a = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(args.slice(0).join(" "))
      .setAuthor(message.author.username)
      message.channel.send(a)
  }
  




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: "User",
};

exports.help = {
  name: "say",
  category: "**Bot**",
  description: "**Affiche toutes les commandes disponibles**",
  usage: "say",
};