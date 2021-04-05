  
const fetch = require("node-fetch");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


  const data = await fetch("https://nekos.life/api/v2/img/pat").then((res) =>
    res.json()
  );
  const user = message.mentions.users.first() || message.author;
  const patted = message.author.id === user.id ? "Kirua" : user.username;

  const stats = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} à pat ${patted}`)
    .setDescription(`[Téléchargement](${data.url})`)
    .setColor('RANDOM')
    .setImage(`${data.url}`);

    message.channel.send(stats);
},




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User",
  };
  
  exports.help = {
    name: "pat",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "pat",
  };