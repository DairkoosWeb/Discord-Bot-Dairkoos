const Discord = require('discord.js');





module.exports.run = async (client, message, args) => {

  const channel = message.mentions.channels.first();
  if (!channel) {
    const noChannelEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.author.username} Vous devez fournir un salon.`);

    return message.channel.send(noChannelEmbed).then(m => {
      setTimeout(() => {m.delete()}, 7000);
    });
  }
  const id = channel.id;

  const channelIdEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`L'ID du salon est : ${id}.`);

  message.channel.send(channelIdEmbed);
},



exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["salonid"],
    permlevel: "User",
};

exports.help = {
    name: "channelid",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "channelid",
};