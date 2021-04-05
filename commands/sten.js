const Discord = require("discord.js")


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#ff5555')
    .setDescription(args.join(' '))
    .setTimestamp()
    .setFooter(`annonce faite par ${message.author.tag}`)
    
    message.channel.send(embed);
  };


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User",
  };
  
  exports.help = {
    name: "sten",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "sten",
  };