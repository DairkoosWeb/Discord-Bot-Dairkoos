const weather = require('weather-js');

const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

        weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
            if(error) return message.channel.send({embed: {
                color: "RANDOM",
                description: "Veuillez fournir une ville."
              }});
            if(!args[0]) return message.channel.send({embed: {
                color: "RANDOM",
                description: ""
              }});
    
            if(result === undefined || result.length === 0) return message.channel.send({embed: {
                color: "RANDOM",
                description: "La ville que vous avez fournis est introuvable."
              }});
    
            var current = result[0].current;
            var location = result[0].location;
    
            const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Météo Pour  ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('RANDOM')
            .addField('Fuseau horaire', `UTC${location.timezone}`, true)
            .addField('Type de Degré', 'Celsius', true)
            .addField('Température', `${current.temperature}°`, true)
            .addField('Vent', current.winddisplay, true)
            .addField('Humidité', `${current.humidity}%`, true)
    
    
            message.channel.send(weatherinfo)
            })        
        }
exports.conf = {
enabled: true,
 guildOnly: false,
aliases: [],
permLevel: "User",
};
      
exports.help = {
name: "meteo",
category: "** 🇫🇷 **",
description: "**Obtenez des informations sur un skin pour Fortnite**",
usage: "meteo",
};