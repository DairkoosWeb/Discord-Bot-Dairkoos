const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    const data = await fetch(
        "https://no-api-key.com/api/v1/animals/bear"
      ).then((res) => res.json());
  
      const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(
          `[Téléchargement](${data.image})`
        )
        .setImage(`${data.image}`)
        .setTimestamp();
  
      message.channel.send(embed);
    },



exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["ours"],
    permlevel: "User",
};

exports.help = {
    name: "ours",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "ours",
};