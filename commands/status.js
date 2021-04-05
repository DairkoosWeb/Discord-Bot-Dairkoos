const os = require('os');
const pckg = require('../package.json');
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const msg = await message.channel.send(new Discord.MessageEmbed()
    .setDescription('Recherche du status de Dairkoos ...')  
    .setColor("RED"));

const clientLatency = msg.createdTimestamp - message.createdTimestamp;
const totalMemory = os.totalmem();
const memoryPercentage = (totalMemory - os.freemem()) / totalMemory * 100;
let statusMsg = '';
let memoryMsg = '';

function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    return `${hrs.padStart(2, '0')} heures, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} secondes `;
}

const status = new Discord.MessageEmbed()
    .setTitle('Dairkoos Status')
    .setDescription(`> Voici ci-dessous, quelques statistiques. \n\n> **Dairkoos** est un bot Français multifonctions \n\n> **Latence:** \`${clientLatency}ms\`\n> **Version:** \`${pckg.version}\`\n> **Utilisation de la mémoire:** \`${Math.round(memoryPercentage)}%\` `)

// Memory Usage
if (memoryPercentage > 29 && memoryPercentage < 50) {
    memoryMsg = ' Utilisation de la mémoire supérieure à la moyenne.';
}
else if (memoryPercentage > 0 && memoryPercentage < 30) {
    memoryMsg = ' Utilisation normal de la mémoire.>';
}
else if (memoryPercentage > 49 && memoryPercentage < 999999999) {
    memoryMsg = ' Utilisation de la mémoire extrêmement élevée.';
}
else {
    memoryMsg = 'Utilisation normal de la mémoire.';
}

// Bot latency
if (clientLatency > 199 && clientLatency < 600) {
    status.setColor("RED");
    statusMsg = ' Latence de Dairkoos supérieure à la moyenne.>';
}
else if (clientLatency > 0 && clientLatency < 200) {
    status.setColor("RED");
    statusMsg = 'Latence normal de Dairkoos.';
}
else if (clientLatency > 599 && clientLatency < 999999999) {
    status.setColor("RED");
    statusMsg = 'Latence de Dairkoos extrêmement élevée.';
}
else {
    status.setColor("GREEN");
    statusMsg = 'La latence de Dairkoos est parfait.';
}

status.addField('Informations', `${statusMsg}\n${memoryMsg}`);
msg.edit(status);
  }






exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [""],
    permlevel: "User",
};

exports.help = {
    name: "status",
    category: "bot",
    description: "",
    usage: "status",
};