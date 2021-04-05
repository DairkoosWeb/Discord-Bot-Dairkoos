
const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');

const numformat = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };



exports.run = (client, message, args) =>{
    (async () => {
        try 
        {
            const user = await TikTokScraper.getUserProfileInfo(args[0]);
            if(user.user.signature == ''){
                const userbe = new discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Information de - @${user.user.uniqueId}`)
                .setURL(`https://www.tiktok.com/@${user.user.uniqueId}`)
                .setThumbnail(user.user.avatarThumb)
                .addField("Nom", `${user.user.uniqueId}`, true)
                .addField("Pseudo", `${user.user.nickname}`, true)
                .addField("Bio", `No bio yet.`)
                .addField("Abonnées", numformat(`${user.stats.followerCount}`),true)
                .addField("Follows", numformat(`${user.stats.followingCount}`),true)
                .addField("Coeur", numformat(`${user.stats.heartCount}`),true)
                message.channel.send({embed: userbe })
            }
            else
            {
                const userbd = new discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Information de - @${user.user.uniqueId}`)
                .setURL(`https://www.tiktok.com/@${user.user.uniqueId}`)
                .setThumbnail(user.user.avatarThumb)
                .addField("Nom", `${user.user.uniqueId}`, true)
                .addField("Pseudo", `${user.user.nickname}`, true)
                .addField("Bio", `${user.user.signature}`)
                .addField("Abonnées", numformat(`${user.stats.followerCount}`),true)
                .addField("Follows", numformat(`${user.stats.followingCount}`),true)
                .addField("Coeurs", numformat(`${user.stats.heartCount}`),true)
                message.channel.send({embed: userbd })            
            }
        } 
        catch (error) 
        {
            const embederr = new discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription("Veuillez fournir un Nom.")
            message.channel.send({embed: embederr })
        }
    })();
}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["tiktokinfo"],
    permlevel: "User",
};

exports.help = {
    name: "tiktok",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "tiktok",
};