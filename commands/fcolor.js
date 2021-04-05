const fall = require('fall-guys-api-fixed');
const { MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => { 
    
    if(!args.join(" ")) return message.channel.send({embed: {
        color: "RED",
        description: "Vous n'avez pas fournir de couleur."
      }});

    const c = await fall.getColors();

    let color = c.getColor(args.join(" "));

    let embed = new MessageEmbed()
    .setThumbnail(color.img)
    .setColor("RANDOM")
    .setTitle(color.name)
    .setURL(color.img)
    .addField("Rareté:", color.rarity)
    .addField("Acquérir:", color.acquire)
    .addField("Saison:", color.season)
    .addField("Étage:", color.tier)

    message.channel.send(embed);
}



exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["fcolor"],
  permlevel: "User",
};

exports.help = {
  name: "fcolor",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "fcolor",
};