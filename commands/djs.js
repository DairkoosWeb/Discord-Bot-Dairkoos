 
const axios = require("axios");

module.exports.run = async (client, message, args) => {
 const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      args
    )}`

    axios
      .get(uri)
      .then((embed) => {
        const { data } = embed

        if (data && !data.error) {
          message.channel.send({ embed: data })
        } else {
          message.reply('Impossible de trouver cette documentation')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["discordjs"],
    permlevel: "User",
};

exports.help = {
    name: "djs",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "djs",
};
