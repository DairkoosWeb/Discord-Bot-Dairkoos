const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
    const channels =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(`${args[0]}`) ||
      message.guild.channels.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.channel;

    let check;
    if (args[0] === "temp") {
      check = "true";
    } else if (args[1] === "temp") {
      check = "true";
    } else {
      check = "false";
    }
    let check2;
    if (args[0] === "temp") {
      check2 = "86400";
    } else if (args[1] === "temp") {
      check2 = "86400";
    } else {
      check2 = "0";
    }

    channels
      .createInvite({
        temporary: `${check}`,
        maxAge: `${check2}`,
        maxUses: 0,
      })
      .then(InviteCode =>
        message.channel.send(
          new MessageEmbed()
            .setTitle(`Invite du salon : ${channels.name} `)
            .addField(`Lien`, `https://discord.gg/${InviteCode.code}`)
            .setColor('RANDOM')
            .setTimestamp()
        )
      );
  }


exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: [],
  permlevel: "User",
};

exports.help = {
  name: "saloninvite",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "saloninvite",
};