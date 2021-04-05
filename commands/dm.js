const Discord = module.require('discord.js');

module.exports.run = async (bot, message) => {
    
message.delete();

let desti = message.mentions.users.first()

const guild = message.guild;

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send({embed: {
  color: 'RED',
  description: "Vous n'avez pas la permission d'utiliser cette commande."
}});
if (!desti) return message.channel.send({embed: {
  color: 'RED',
  description: "Veuillez @ la personne que vous voulez dm."
}});
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
let texte = args.join(" ").slice(22);
if(!texte) return message.channel.send({embed: {
  color: "RED",
  description: "Veuillez fournir un message a envoyé."
}});

const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`**le serveur ${guild.name} vous a contactée**`)
  .addField('Pour :', `> **${texte}**`)
  .setFooter(message.author.username,message.author.avatarURL({dynamic: true}))
  
desti.send(embed)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["mp", "sendmp"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "dm",
    category: "Levels",
    description: "Get's your xp and level.",
    usage: "dm",
  };  