const Discord = require('discord.js');
const { default: Axios } = require('axios');

module.exports.run = async (bot, message, args) => {
let getVersion = async () => {
  let response = await Axios.get('https://fortnite-public-service-stage.ol.epicgames.com/fortnite/api/version')
  let version = response.data;
  return version
}
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setDescription('Dernières informations sur les serveurs')
 .addField('Nom', `> ${versionValue.moduleName}`)
 .addField('Build #', `> ${versionValue.build}`)
 .addField('Version', `> ${versionValue.version}`)
 .addField('Branch', `> ${versionValue.branch}`)
 .addField('Liste #', `> ${versionValue.cln}`);
 message.channel.send({
    embed
});
return;
}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [],
    permlevel: "User",
};

exports.help = {
    name: "versiondev",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "versiondev",
};