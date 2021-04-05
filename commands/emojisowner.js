module.exports.run = async (bot, msg) => {
  let arr = [];
  bot.emojis.cache.forEach(emoji => {
      arr.push(emoji);
      if(arr.join('').length > 1950){
          msg.channel.send(arr.join(''));
          arr = [];
      }
  })
  if(arr.length){
      return msg.channel.send(arr.join(''));
  }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "User",
};

exports.help = {
  name: "emojisowner",
  category: "**Bot**",
  description: "**Affiche toutes les commandes disponibles**",
  usage: "emojisowner",
};