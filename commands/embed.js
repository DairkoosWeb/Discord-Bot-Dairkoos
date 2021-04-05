const Discord = require("discord.js")


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#f7b9ff')
    .setDescription(args.join(' '))
    .setTimestamp()
    .setFooter(`${message.author.tag}`)
    
    message.channel.send(embed);
  };


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["EMBED", "EMBEDE"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "embed",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "embed",
  };