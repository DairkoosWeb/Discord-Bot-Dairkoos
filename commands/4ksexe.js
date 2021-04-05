const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
    if (!message.channel.nsfw)
return message.channel.send({embed: {
    color: "RED",
    description: "Vous devez activé le mode **NSFW** au salon !"
  }});
    const data = await fetch(
        "https://nekobot.xyz/api/image?type=4k"
      ).then((res) => res.json());
  
      const embed = new MessageEmbed()
        .setDescription(`[Lien](${data.message})`)
        .setColor('RANDOM')
        .setImage(`${data.message}`)
  
      message.channel.send(embed);
    },



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "4ksexe",
  category: "**Bot**",
  description: "**Affiche toutes les commandes disponibles**",
  usage: "4ksexe",
};