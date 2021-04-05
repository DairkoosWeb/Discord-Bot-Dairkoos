const fall = require('fall-guys-api-fixed');
const { MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => { 
    try {
        if(!args.join(" ")) return message.channel.send({embed: {
            color: "RED",
            description: "Vous devez fournir une face."
          }});

        const c = await fall.getFaces();

        let face = c.getFace(args.join(" "));

        let embed = new MessageEmbed()
        .setThumbnail(face.img)
        .setColor("RANDOM")
        .setTitle(face.name)
        .setURL(face.img)
        .addField("Rareté:", face.rarity)
        .addField("Acquérir:", face.acquire)

        message.channel.send(embed);
    } catch {
        return message.channel.send({embed: {
            color: "red",
            description: "La face que vous avez fournis est invalide."
          }});
    }
}




exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["face"],
  permlevel: "User",
};

exports.help = {
  name: "face",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "face",
};