const fall = require('fall-guys-api-fixed');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

if(!args.join(" ")) return message.channel.send({embed: {
    color: "RED",
    description: "Nous avez fournir aucun skin."
  }});

        try {

            const skin = await fall.getSkins();

            let s = skin.getSkin(args.join(" "));
        
            let thumb = [`${s.upperImg}`, `${s.lowerImg}`];
            let page = 1
            let link = [`${s.upperImg}`, `${s.lowerImg}`]
    
            let embed = new MessageEmbed()
            .setThumbnail(thumb[page-1])
            .setColor("RANDOM")
            .setTitle(s.name)
            .setURL(link[page-1])
            .addField("Rareté:", s.rarity)
            .addField("Acquérir:", s.acquire)
            .addField("Prix:", `${s.price} ${s.currency}`)
    
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
                    embed.setThumbnail(thumb[page-1])
                    embed.setURL(link[page-1])
                    msg.edit(embed);
                });
    
                f2.on('collect', r => {
                    if(page === thumb.length) return;
                    page++;
                    embed.setThumbnail(thumb[page-1])
                    embed.setURL(link[page-1])
                    msg.edit(embed);
                });
    
                f3.on('collect', r => {
                    msg.delete();
                });
            });
        } catch {
            return message.channel.send({embed: {
                color: "RED",
                description: "Le skin que vous avez fournir est invalide."
              }});
        }
    }


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["fskin"],
    permlevel: "User",
};

exports.help = {
    name: "fskin",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "fskin",
};