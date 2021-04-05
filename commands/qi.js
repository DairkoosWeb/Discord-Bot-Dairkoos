const { MessageEmbed } = require("discord.js");



module.exports.run = async (bot, message, args) => {
    const iq = Math.floor(Math.random() * 1000) + 1;

    const embed = new MessageEmbed()
        .setTitle(`Votre QI est de : ${iq}`)
        .setColor('RANDOM')
        .setTimestamp();

    message.channel.send(embed);
}


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["qi"],
    permlevel: "User",
};

exports.help = {
    name: "qi",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "qi",
};