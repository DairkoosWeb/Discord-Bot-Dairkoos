const { MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => {   
        
const embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
.setColor('RANDOM')
.setDescription(args.join(" "))
.setTimestamp()

const poll = await message.channel.send(embed);
await poll.react("☑️");
await poll.react("❌");

message.delete();
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sondage", "poll"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "sondage",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "sondage",
  };