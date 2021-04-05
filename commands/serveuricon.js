const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
     
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`Voici l'icôns du serveur de : ${message.guild.name}`);
        embed.setImage(message.guild.iconURL({size: 4096, dynamic: true}));
        embed.setColor('RANDOM');
        embed.setTimestamp();
    
        message.channel.send(embed);
    }


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["activite","activity"],
    permlevel: "User",
};

exports.help = {
    name: "serveuricon",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "serveuricon",
};