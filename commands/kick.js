const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
  let reason = args.slice(1).join(" ");

  // MESSAGES

  if (!kicked) {
    let kickinfoembed = new Discord.MessageEmbed()
      .setDescription('Veuillez mentionnez un utilisateur')
      .setColor("RANDOM");
    message.channel.send(kickinfoembed);

    return;
  }

  if (message.author === kicked) {
    let sanctionyourselfembed = new Discord.MessageEmbed()
      .setDescription(`You cannot sanction yourself`)
      .setColor("#2C2F33");
    message.channel.send(sanctionyourselfembed);

    return;
  }

  if (!reason) {
    let noreasonembed = new Discord.MessageEmbed()
      .setDescription(`Veuillez entrer une raison`)
      .setColor("RANDOM");
    message.channel.send(noreasonembed);

    return;
  }

  if (!message.member.permissions.has("KICK_MEMBERS")) {
    let nopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "Vous n'avez pas la permission ``KICK_MEMBERS ``"
      )
      .setColor("RANDOM");
    message.channel.send(nopermsembed);

    return;
  }

  if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
    let botnopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "Je n'ai pas la ``Permission : KICK_MEMBERS ``, veuillez contacter un administrateur"
      )
      .setColor("RANDOM");
    message.channel.send(botnopermsembed);

    return;
  }

  message.guild.member(kicked).kick(reason);

  let successfullyembed = new Discord.MessageEmbed()
    .setDescription(`**${kicked.tag}** a bien été kick du serveur`)
    .setColor("RANDOM");

  message.channel.send(successfullyembed);

}
exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["kick","exclure"],
  permlevel: "User",
};

exports.help = {
name: "kick",
category: "Moderation",
description: "Kicks a specified user.",
usage: "kick",
};
  