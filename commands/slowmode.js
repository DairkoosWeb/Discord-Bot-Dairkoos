const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let notice3 = new Discord.MessageEmbed()
    .setDescription(
      `Échec de la définition du mode lent sur ce salon, vérifiez le numéro !`
    )
    .setColor("RED");
  let notice1 = new Discord.MessageEmbed()
    .setDescription(
      `Échec de la définition du mode lent sur ce salon, veuillez saisir un numéro valide !`
    )
    .setColor("RED");
  let noticwsse1 = new Discord.MessageEmbed()
    .setDescription(
      `Échec de la définition du mode lent sur ce salon, vous ne pouvez taper que de 0 à 21600 secondes !`
    )
    .setColor("RED");
  let notice22 = new Discord.MessageEmbed()
    .setDescription(
      `Vous n'avez pas la permission de mettre ce salon en **slowmode** !`
    )
    .setColor("RED");
  if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
    return message.channel
      .send(notice3)
      .then(msg => msg.delete({ timeout: 5000 }));
  let duration = parseInt(args[0]);
  let mmsssqembed = new Discord.MessageEmbed()
    .setDescription(
      ` ${message.author.username}, vosu n\'avez pas la permission`
    )
    .setColor("#FFFF00");
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel
      .send(mmsssqembed)
      .then(msg => msg.delete({ timeout: 5000 }));
  if (isNaN(duration)) {
    return message.channel.send(notice1);
  } else if (duration < 0 || duration > 21601) {
    return message.channel.send(noticwsse1);
  }
  message.channel.setRateLimitPerUser(duration).catch(() => {
    message.channel.send(notice3);
  });
  let bsuembed = new Discord.MessageEmbed()
    .setDescription(
      `Le **Slowmode** de ce salon à été définis sur  **${duration}s** `
    )
    .setColor("GREEN");

  message.channel.send(bsuembed);
};



exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [""],
    permlevel: "User",
};

exports.help = {
    name: "slowmode",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "slowmode",
};
