
const Discord = require('discord.js')

exports.run = async (client, message, args) => {



const botMembro = message.guild.member(client.user.id)
const permissoesBot = message.channel.memberPermissions(botMembro)
const podeEnviarMsg = permissoesBot.has("SEND_MESSAGES")
const embedInvite = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Pour m'ajouter sur votre serveur il suffis juste de cliqué juste [ICI](https://discord.com/oauth2/authorize?client_id=801965428288651314&scope=bot&permissions=2146958847&redirect_uri=https://discord.gg/DpTtfEd4Fe&response_type=code)`)
  .setTimestamp()
  .setThumbnail(client.user.displayAvatarURL())
if(podeEnviarMsg) {
  message.channel.send(embedInvite)
} else {
  message.author.send(embedInvite).then(msg => {
    if(podeAddReactions) {
      message.react(emojis.circlecheckverde)
    }
  }, () => {
    if(podeAddReactions) {
      message.react(emojis.alertcircleamarelo)
    }
  })
}

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User",
  };
  
  exports.help = {
    name: "invite",
    category: "**Bot**",
    description: "",
    usage: "invite",
  };