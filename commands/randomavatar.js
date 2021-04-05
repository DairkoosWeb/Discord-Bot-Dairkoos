const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/avatar`);

  let generateembed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setImage(body.url);

  message.channel.send(generateembed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["randomavatar"],
    permLevel: "User",
};

exports.help = {
    name: "randomavatar",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "randomavatar",
};