const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
    message.guild.members.fetch().then(fetchAll => {
        const online = fetchAll.filter(m => m.presence.status === 'online');
        const idle = fetchAll.filter(m => m.presence.status === 'idle');
        const dnd = fetchAll.filter(m => m.presence.status === 'dnd');
        const offline = fetchAll.filter(m => m.presence.status === 'offline');
    
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField(` En ligne(s)`, `> ${online.size} Membres`)
    .addField(` Inactif(s)`, `> ${idle.size} Membres`)
    .addField(` Ne pas déranger(s)`, `> ${dnd.size} Membres`)
    .addField(` Hors Ligne(s)`, `> ${offline.size} Membres`)
    .setThumbnail(message.guild.iconURL({size: 4096, dynamic: true}));
    message.channel.send(embed);
    })

}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["activite","activity"],
    permlevel: "User",
};

exports.help = {
    name: "activité",
    category: "bot",
    description: "",
    usage: "activité",
};