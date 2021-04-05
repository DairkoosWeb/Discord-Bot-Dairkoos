  
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (bot, message, args) => {
    const text = args.join(" ");
    if (!text) return message.reply({embed: {
      color: "RANDOM",
      description: "Vous devez fournir un message après la commande."
    }});

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setImage(data.message)
      .setFooter(message.author.username)
      .setColor('RANDOM')
      .setDescription(
        `[Téléchargement](${data.message})`
      );

    message.channel.send(embed);
  },


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "user",
  };
  
  exports.help = {
    name: "clyde",
    category: "Ticketing",
    description: "Closes the current ticket",
    usage: "clyde",
  };