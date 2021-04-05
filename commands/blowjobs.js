const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
    if (!message.channel.nsfw)
      return message.channel.send({embed: {
        color: "RANDOM",
        description: "Vous devez activer le mode **NSFW** au salon."
      }});

    const data = await fetch(
      "https://nekobot.xyz/api/image?type=hanal"
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor('RANDOM')
      .setDescription(
        `[Téléchargement](${data.message})`
      )
      .setImage(`${data.message}`)
      .setTimestamp();

    message.channel.send(embed);
  },

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp"],
    permLevel: "User",
};
  
exports.help = {
    name: "hentaianal",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "hentaianal",
};