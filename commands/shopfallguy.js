const fall = require('fall-guys-api-fixed');
const { MessageEmbed } = require('discord.js');


exports.run = async (client, message, args) => {

const daily = await fall.getDaily();

let page = 1
let desc = [`**Nom:** ${daily.pcStore[0].name}\n\n**Rareté:** ${daily.pcStore[0].rarity}\n\n**Prix:** ${daily.pcStore[0].price} ${daily.pcStore[0].currency}`,
            `**Nom:** ${daily.pcStore[1].name}\n\n**Rareté:** ${daily.pcStore[1].rarity}\n\n**Prix:** ${daily.pcStore[1].price} ${daily.pcStore[1].currency}`,
            `**Nom:** ${daily.pcStore[2].name}\n\n**Rareté:** ${daily.pcStore[2].rarity}\n\n**Prix:** ${daily.pcStore[2].price} ${daily.pcStore[2].currency}`]

let embed = new MessageEmbed()
.setColor('RANDOM')
.setTimestamp()
.setDescription(desc[page-1])
.setFooter(`SHop| Page ${page} sur ${desc.length}`, message.author.displayAvatarURL());

message.channel.send(embed).then(msg => {
    msg.react('⏪').catch(err => console.log(err))
    msg.react('⏩').catch(err => console.log(err))
    msg.react('❎').catch(err => console.log(err))

    let filter3 = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
    let filter1 = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
    let filter2 = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

    let f = msg.createReactionCollector(filter1, { time: 1000000 })
    let f2 = msg.createReactionCollector(filter2, { time: 1000000 })
    let f3 = msg.createReactionCollector(filter3, { time: 1000000 })

    f.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(desc[page-1])
        embed.setFooter(`Shop | Page ${page} sur ${desc.length}`, message.author.displayAvatarURL());
        msg.edit(embed);
    });

    f2.on('collect', r => {
        if(page === desc.length) return;
        page++;
        embed.setDescription(desc[page-1])
        embed.setFooter(`Shop | Page ${page} sur ${desc.length}`, message.author.displayAvatarURL());
        msg.edit(embed);
    });

    f3.on('collect', r => {
        msg.delete();
    });
});

}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["shop"],
    permlevel: "User",
};

exports.help = {
    name: "shop",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "shop",
};