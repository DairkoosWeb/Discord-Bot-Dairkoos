const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, msg, args) => {
  let notice3 = new Discord.MessageEmbed()
    .setDescription(
      `Je n'ai pas la permission de bannir des membres.`
    )
    .setColor("RED");
  if (!msg.guild.member(client.user).hasPermission("BAN_MEMBERS"))
    return msg.channel.send(notice3).then(msg => msg.delete({ timeout: 5000 }));

  let banTaged = msg.mentions.users.first();
  let reason = args.slice(1).join(" ");

  let mmqembed = new Discord.MessageEmbed()
    .setDescription(
      `${msg.author.username}, vous n'avez pas la permissions !`
    )
    .setColor("#FFFF00");
  if (!msg.member.hasPermission("BAN_MEMBERS"))
    return msg.channel.send(mmqembed).then(msg => msg.delete({ timeout: 5000 }));
  let kntlembed = new Discord.MessageEmbed()
    .setDescription(
      "Mauvaise utilisation。\n\n**Fonction :** Bannir un membres \n**Utilisation :** k.ban [membre] [Raison]\n**Example:** k.ban @Dairkoos mec trop charismatique"
    )
    .setColor("RED");
  if (!banTaged) {
    msg.delete();
    return msg.channel.send(kntlembed).then(msg => msg.delete({ timeout: 10000 }));
  }
  let notice2 = new Discord.MessageEmbed()
    .setDescription(`Vous ne pouvez pas vous bannir !`)
    .setColor("RED");
  if (msg.mentions.users.first().id === msg.author.id) return msg.channel.send(notice2).then(msg => msg.delete({ timeout: 10000 }));
  let dsfdsfsdf = new Discord.MessageEmbed()
    .setDescription(
      `Accès refusé, ce membre a des rôles supérieurs ou égaux à vous !`
    )
    .setColor("RED");
  let sdfsdfsdfsd = new Discord.MessageEmbed()
    .setDescription(
      `vous n\'avez pas mis de raison au ban veuillez en fournir une`
    )
    .setColor("RED");
  let botRolePossition = msg.guild.member(client.user).roles.highest.position;
  let rolePosition = msg.guild.member(banTaged).roles.highest.position;
  let userRolePossition = msg.member.roles.highest.position;
  if (userRolePossition <= rolePosition) return msg.channel.send(dsfdsfsdf)
  if (botRolePossition <= rolePosition) return msg.channel.send(sdfsdfsdfsd)


  let sdfdfsdfsdfdfs = new Discord.MessageEmbed()
    .setDescription(`Une erreur s'est produite avec ce membre bannis !`)
    .setColor("RED");

  if (reason.length < 1) reason = "No reason given.";

  if (!msg.guild.member(banTaged).bannable) {
    return msg.channel.send(sdfdfsdfsdfdfs);
  }

  let banEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .addField("Par ?", `<@${banTaged.id}>`)
    .addField("Utilisateur", `**<@${msg.author.id}>**`)
    .addField("Raison", `\`\`\`${reason}\`\`\``)
    .setTimestamp()
  let bsuembed = new Discord.MessageEmbed()
    .setDescription(
      `**Bannis ${banTaged.username}#${banTaged.discriminator}** \n raison :  **${reason}**`
    )
    .setColor("GREEN");

  msg.delete();
  msg.channel.send(bsuembed);
  msg.guild.members.ban(banTaged.id, { reason: reason });

  banTaged.send(
    `vous avez été bannis de : **${msg.guild.name}**, pour : **${reason}**`
  );
};

exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: [],
  permlevel: "User",
};

exports.help = {
name: "ban",
category: "Moderation",
description: "Kicks a specified user.",
usage: "ban",
};
  