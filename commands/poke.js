  
const fetch = require("node-fetch");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


  const data = await fetch("https://nekos.life/api/v2/img/poke").then((res) =>
    res.json()
  );
  const user = message.mentions.users.first() || message.author;
  const poked = message.author.id === user.id ? "Kirua" : user.username;

  const stats = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} à poke ${poked}`)
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
    name: "poke",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "poke",
  };