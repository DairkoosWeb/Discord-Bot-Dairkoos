
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
const text = args.join(" ");

    if (!text) return message.channel.send({embed: {
        color: "RANDOM",
        description: "Veuillez fournir un message après la commande"
      }});

    const image = `https://api.alexflipnote.dev/supreme?text=${encodeURIComponent(
      text
    )}`;

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`[Téléchargement.](${image})`)
      .setImage(image)
      .setTimestamp();

    message.channel.send(embed);
  },


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["supreme"],
    permlevel: "User",
};

exports.help = {
    name: "supreme",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "supreme",
};