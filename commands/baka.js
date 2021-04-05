const nekos = require('nekos.life')
const { sfw: { baka } } = new nekos()
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  const { url } = await baka().catch(()=>{})

  if (!url) return message.channel.send(`<:yukierror:760031338832723999>  ${message.author}, Vous ne pouvez pas auto-Baka <:yukierror:760031338832723999>`)

  if (!message.mentions.members.size)
  return message.channel.send(new MessageEmbed()
      .setColor('GREY')
      .setImage(url))

  if (message.mentions.members.first().id === client.user.id)
  return message.react('💢')

  if (message.mentions.members.first().id === message.author.id)
  return message.channel.send({embed: {
    color: "RANDOM",
    description: "Une erreur est survenue lors de l\'utilisation de la commande."
  }});

  return message.channel.send(new MessageEmbed()
      .setColor('RANDOM')
      .setImage(url)
      .setDescription(`${message.author} B~baka! ${message.mentions.members.first()} `))

  }





exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["baka"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "baka",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "baka",
  };