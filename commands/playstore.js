const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");

exports.run = async (client, message, args) => {
    if (!args[0])
    return message.channel.send({embed: {
        color: "RANDOM",
        description: "Vous devez fournir une application."
      }});

  PlayStore.search({
    term: args.join(" "),
    num: 1
  }).then(Data => {
    let App;

    try {
      App = JSON.parse(JSON.stringify(Data[0]));
    } catch (error) {
      return message.channel.send({embed: {
        color: "RANDOM",
        description: "Aucune application trouvé."
      }});
    }
    let Embed = new Discord.MessageEmbed()
      .setThumbnail(App.icon)
      .setURL(App.url)
      .setColor('RANDOM')
      .setTitle(`${App.title}`)
      .setDescription(App.summary)
      .addField(`Prix`, App.priceText, true)
      .addField(`Dévellopeur`, App.developer, true)
      .addField(`Vote`, App.scoreText, true)
      .setTimestamp();

    return message.channel.send(Embed);
  });
}



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["playstore"],
    permLevel: "User",
};

exports.help = {
    name: "playstore",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "playstore",
};