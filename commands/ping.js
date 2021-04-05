const Discord = require("discord.js")
const { ShardingManager } = require('discord.js');

exports.run = async (client, message, args) => {

    message.delete({ timeout: 5 })
    let msg = await
    message.channel.send({embed: {
        color: "RANDOM",
        description: "Recherche du ping..."
      }});

    var time = msg.createdTimestamp - message.createdTimestamp + " ms "
   
    if (time.startsWith('-')) var time = message.createdTimestamp - msg.createdTimestamp + ' ms '
    
    const embedCreated = new Discord.MessageEmbed()


    .setColor('RANDOM')
    .addField(`Bot `, `` + time)
    .addField(`Api `, `` + client.ws.ping + " ms")
    
    await msg.edit(embedCreated)
    msg.edit("")


};

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [],
    permlevel: "User",
};

exports.help = {
    name: "ping",
    category: "fortnite",
    description: "",
    usage: "ping",
};