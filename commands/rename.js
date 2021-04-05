const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('Vous devez @ quelqu\'un ou me donner un ID utilisateur valide pour que je puisse le renommer.').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
  
  try {
      user.setNickname(newname)
  } catch(e) {
      let embed = new Discord.MessageEmbed()
            .setDescription("Impossible de changer le pseudo du membre !")
      message.channel.send(embed3)
  }
    let embed = new Discord.MessageEmbed()
            .setDescription("le pseudo à bien été définis. ")
  message.channel.send(embed);
};
 
exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [],
    permlevel: "User",
  };
  
  exports.help = {
  name: "rename",
  category: "Moderation",
  description: "Kicks a specified user.",
  usage: "rename",
  };
    