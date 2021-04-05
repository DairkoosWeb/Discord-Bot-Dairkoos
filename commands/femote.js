const fall = require('fall-guys-api-fixed');
const { MessageEmbed } = require('discord.js');


module.exports.run = async (client, message, args) => { 

     try {
            if(!args.join(" ")) return message.channel.send({embed: {
  color: "RED",
  description: "Vous devez fournir une émote."
}});

            const e = await fall.getEmotes();
    
            let emote = e.getEmote(args.join(" "));
    
            let embed = new MessageEmbed()
            .setThumbnail(emote.img)
            .setColor("RANDOM")
            .setTitle(emote.name)
            .setURL(emote.img)
            .addField("Rareté", emote.rarity)
            .addField("Acquérir:", emote.acquire)
    
            message.channel.send(embed);
        } catch {
            return message.channel.send({embed: {
  color: "RED",
  description: "l'émote que vous avez fournir est invalide."
}});
        }
    }


exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["femote"],
  permlevel: "User",
};

exports.help = {
  name: "femote",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "femote",
};