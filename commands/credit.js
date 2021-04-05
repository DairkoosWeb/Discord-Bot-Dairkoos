
const Discord = require("discord.js");

exports.run = async (client, message, args) => {


		const credits = new Discord.MessageEmbed()
        .setDescription(`
> Dairkoos <@768832560977018900>
        `)
        .setImage('https://media1.giphy.com/media/MQWzFeayg3By8/giphy.gif')
        .setColor('RANDOM');

    message.channel.send(credits);
},


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User",
  };
  
  exports.help = {
    name: "credit",
    category: "bot",
    description: "",
    usage: "credit",
  };