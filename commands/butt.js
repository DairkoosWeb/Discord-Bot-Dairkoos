
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return message.reply({embed: {
        color: "#f7b9ff'",
        description: "Vous devez activer le mode **NSFW** au salon"
    }});

    const data = await fetch("http://api.obutts.ru/butts/0/1/random").then(res => res.json());

    const embed = new MessageEmbed()
        .setFooter(message.author.username)
        .setColor("RANDOM")
        .setDescription(`[téléchargement](http://media.obutts.ru/${data[0].preview})`)
        .setImage(`http://media.obutts.ru/${data[0].preview}`)
        .setTimestamp();

    message.channel.send(embed);
}


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["fuck"],
    permlevel: "User",
};

exports.help = {
    name: "butt",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "butt",
};