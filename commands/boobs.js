
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return message.reply({embed: {
        color: "RANDOM",
        description: "Vous devez activer le mode NSFW au salon."
    }});

    const data = await fetch("http://api.oboobs.ru/boobs/0/1/random").then(res => res.json());

    const embed = new MessageEmbed()
        .setFooter(message.author.username)
        .setColor("RANDOM")
        .setDescription(`[Téléchargement](http://media.oboobs.ru/${data[0].preview})`)
        .setImage(`http://media.oboobs.ru/${data[0].preview}`)
        .setTimestamp();

    message.channel.send(embed);
}


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["boobs"],
    permlevel: "User",
};

exports.help = {
    name: "boobs",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "boobs",
};