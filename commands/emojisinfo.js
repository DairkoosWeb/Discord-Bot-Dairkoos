const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, [ emoji ]) => {

    if (!emoji || !emoji.match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/))
      return message.channel.send(`<:yukierror:760031338832723999> **Veuillez fournir un émojis** <:yukierror:760031338832723999>`)

    const emojiID = emoji.match(/\d{17,19}/)[0]

    return message.channel.send(new MessageEmbed()
                                    .setImage(`https://cdn.discordapp.com/emojis/${emojiID}`)
                                    .setColor('#f7b9ff')
                                    .setFooter("Yuki © "))

  }






















exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["listerole"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "emojisinfo",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "emojisinfo",
  };