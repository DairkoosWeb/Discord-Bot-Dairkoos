const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    return message.channel.send( new MessageEmbed()


    .addField('**RÔLES ADMINISTRATIONS**', `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${
      message.guild.roles.cache.filter(role => role.permissions.has('ADMINISTRATOR')).size
      ? message.guild.roles.cache.filter(role => role.permissions.has('ADMINISTRATOR')).map(role => `•\u2000${role}\u2000`).splice(0,25).join('')
      : '*Aucun rôle administations*'
    } ${
      message.guild.roles.cache.filter(role => role.permissions.has('ADMINISTRATOR')).size > 25
      ? `et ${message.guild.roles.cache.filter(role => role.permissions.has('ADMINISTRATOR')).size} autres.`
      : ''
    }\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)

    .addField('**RÔLES MODÉRATEURS**', `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${
      message.guild.roles.cache.filter(role => role.permissions.any(['BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES'], false)).size
      ? message.guild.roles.cache.filter(role => role.permissions.any(['BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES'], false)).map(role => `•\u2000${role}\u2000`).splice(0,25).join('')
      : '*Aucun rôle modérateurs*'
    } ${
      message.guild.roles.cache.filter(role => role.permissions.any(['BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES'], false)).size > 25
      ? `et ${message.guild.roles.cache.filter(role => role.permissions.any(['BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES'], false)).size} autres.`
      : ''
    }\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)

    .addField('**RÔLES RÉGULIERS**', `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${
      message.guild.roles.cache.filter(role => !role.permissions.any(['ADMINISTRATOR','BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES']) && role.permissions.has('SEND_MESSAGES')).size
      ? message.guild.roles.cache.filter(role => !role.permissions.any(['ADMINISTRATOR','BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES']) && role.permissions.has('SEND_MESSAGES')).map(role => `•\u2000${role}\u2000`).splice(0,25).join('')
      : '*Aucun rôle réguliers*'
    } ${
      message.guild.roles.cache.filter(role => !role.permissions.any(['ADMINISTRATOR','BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES']) && role.permissions.has('SEND_MESSAGES')).size > 25
      ? `et ${message.guild.roles.cache.filter(role => !role.permissions.any(['ADMINISTRATOR','BAN_MEMBERS','KICK_MEMBERS','MANAGE_NICKNAMES']) && role.permissions.has('SEND_MESSAGES')).size} autre.`
      : ''
    }\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)

    .setColor('RANDOM')

  )
}







exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["listerole"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "listerole",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "listerole",
  };