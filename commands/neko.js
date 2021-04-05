
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return message.reply({embed: {
        color: "RANDOM",
        description: "Vous devez activer le mode **NSFW** au salon"
    }});

    const data = await fetch("https://nekobot.xyz/api/image?type=neko").then(res => res.json());

    const embed = new MessageEmbed()
        .setFooter(message.author.username)
        .setColor("RANDOM")
        .setDescription(`[Téléchargement](${data.message})`)
        .setImage(`${data.message}`)
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
    name: "neko",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "neko",
};