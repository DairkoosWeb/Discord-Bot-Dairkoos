const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
      let user = args[0];
  
  let embed1 = new Discord.MessageEmbed()
    .setDescription("L'utilisateur que vous avez entré n'a pas été banni !")
    .setColor('RED')
    let embed2 = new Discord.MessageEmbed()
    .setDescription("vous devez fournir son pseudo ou bien son id.")
    .setColor('RED')
    
    let EMDDD = new Discord.MessageEmbed()
    .setDescription(` l'utilisateur à bien été débannis !`)
    .setColor('#FFFF00')
    
      let userID = args[0]
        message.guild.fetchBans().then(bans=> {
        if(bans.size == 0) return message.channel.send(embed1).then(m => m.delete({timeout: 15000}))
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return message.channel.send(embed2).then(m => m.delete({timeout: 15000}))
        message.channel.send(EMDDD)
        message.guild.members.unban(bUser.user)
        })
  };

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["unban"],
    permlevel: "User",
};

exports.help = {
    name: "unban",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "unban",
};
