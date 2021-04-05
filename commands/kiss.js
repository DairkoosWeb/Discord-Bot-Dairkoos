  
const { MessageEmbed } = require('discord.js');
const request = require('superagent');

exports.run = async (bot, message, args) => {
    let ment = message.mentions.users.first();
    let dev = ['768832560977018900, 723275807987859506'];
    if (!ment)
        return message.channel.send({embed: {
            color: "RANDOM",
            description: "Vous devez mentionner un utilisateur."
          }});
    if (ment.id == bot.user.id && message.author.id !== dev.join(' || '))
        return message.channel.send({embed: {
            color: "RANDOM",
            description: "Vous ne pouvez pas m'embrasser."
          }});
    if (ment.id == message.author.id)
        return message.channel.send({embed: {
            color: "RANDOM",
            description: "Comment c'est possible ?"
          }});
    if (ment.id == bot.user.id && message.author.id == '776717227935400017')
        return message.channel.send('ce n\'est pas que je t\'aime ou quelque chose comme ça au contraire.');
    const { body } = await request.get('https://nekos.life/api/kiss');

    let botico = bot.user.displayAvatarURL({ format: 'png' });

    const e = new MessageEmbed()
    .setColor('RANDOM')
        .setTitle(`${message.author.username} Kiss ${ment.username} OwO`)
        .setImage(body.url);
    message.channel.send({ embed: e });
},


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["kiss","bisous"],
    permlevel: "User",
};

exports.help = {
    name: "kiss",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "kiss",
};