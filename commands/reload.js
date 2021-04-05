const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
  
  message.delete()
  
  if(message.author.id != "768832560977018900") return message.channel.send({embed: {
    color: "RED",
    description: "Vous n'avez pas les permissions de faire cette commande."
  }});
  
  let commande = args[0]
  if(!commande) return message.channel.send({embed: {
    color: "RANDOM",
    description: "Veuillez fournir la commande a rechargée"
  }});
  
  let commandName = commande.toLowerCase()
  
  try {
    delete require.cache[require.resolve(`./${commandName}.js`)]
    bot.commands.delete(commandName)
    const pull = require(`./${commandName}.js`)
    bot.commands.set(commandName, pull)
  } catch(e) {
    return message.channel.send({embed: {
      color: "RANDOM",
      description: "Je ne peux pas rechargée la commande."
    }});
  }
  
  message.channel.send({embed: {
    color: "RANDOM",
    description: `${message.author} la commande ${commandName}.js a bien été rechargée`
  }});
  
  let LogEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor("Rechargement")
  .setDescription(`**Fait par :** : ${message.author}\n**Commande rechargée** : ${commandName}.js\n**Salon** : ${message.channel}`)
  
    let logChannel = message.guild.channels.cache.get('810732911484993547');
  logChannel.send(LogEmbed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User",
  };
  
  exports.help = {
    name: "reload",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "reload",
  };