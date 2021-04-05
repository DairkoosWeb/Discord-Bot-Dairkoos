const Discord = require("discord.js");
const moment = require('moment');
const os = require('os');
const { ShardingManager } = require('discord.js');

exports.run = (client, message) => {
  let servercount = client.guilds.cache.size;
  let channelscount = client.channels.cache.size;
  let arch = os.arch();
  let platform = os.platform();
  let shard = client.ws.shards.size;
  let NodeVersion = process.version;
  let cores = os.cpus().length;

  let stats = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField("Developer", `> <@768832560977018900> (Dairkoos)`)
  .addField("Nombre de serveurs", `> ${servercount}`)
  .addField("Nombre d'utilisateurs", `> ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} `)
  .addField("Nombre de salons", `> ${channelscount}`)
  .addField('Architecture', `> ${arch}`)
  .addField('Plate-forme', `> ${platform}`)
  .addField('Node-Version', `> ${NodeVersion}`)
  .addField('Shards', `> ${shard}`)
  .addField('Cores', `> ${cores}`)
  .setTimestamp()
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
  message.channel.send(stats);
};
  


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kirua", "Kiruainfo"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "botinfo",
    category: "**Bot**",
    description: "",
    usage: "botinfo",
  };