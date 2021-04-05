const fall = require('fall-guys-api-fixed');
const { MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => { 
    if(!args.join(" ")) return message.channel.send({embed: {
        color: "RED",
        description: "Vous devez fournir une célébration."
      }});

    const cb = await fall.getCelebrations();

    let c = cb.getCelebration(args.join(" "));

    let embed = new MessageEmbed()
    .setThumbnail(c.img)
    .setColor("RANDOM")
    .setTitle(c.name)
    .setURL(c.img)
    .addField("Rareté:", c.rarity)
    .addField("Acquérir:", c.acquire)
    .addField("Saison:", c.season)
    .addField("Étage:", c.tier)

    message.channel.send(embed);
}





exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["fcelebration"],
  permlevel: "User",
};

exports.help = {
  name: "fcelebration",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "fcelebration",
};