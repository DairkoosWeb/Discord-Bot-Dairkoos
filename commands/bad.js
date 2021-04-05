const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const users = message.mentions.users.first() || message.author;
    const urldisp = users.displayAvatarURL()
    const str = urldisp.substring(0, urldisp.length - 5)
    url = `https://api.alexflipnote.dev/bad?image=${str}.png`
    const scrollEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setImage(url)

    message.channel.send(scrollEmbed);
    }
exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [],
    permlevel: "User",
};

exports.help = {
    name: "bad",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "bad",
};