const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const fetch = require('node-fetch');

    let url = "https://api.alexflipnote.dev/dogs";

    let settings = { method: "Get" };

    fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        const scrollEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(`${json.file}`)
         message.channel.send(scrollEmbed);
    });

}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["dog","CHIEN"],
    permlevel: "User",
};

exports.help = {
    name: "chien",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "chien",
};