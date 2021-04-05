const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
exports.run = async (client, message, args) => {



if (!message.channel.nsfw)
return message.channel.send("Ce salon n'est pas en mode NSFW!");
const data = await fetch(
"https://nekobot.xyz/api/image?type=hass"
).then((res) => res.json());
const embed = new MessageEmbed()
.setFooter(message.author.username)
.setColor('#f7b9ff')
.setDescription(
  `[L'image ne s'affiche pas clique ici.](${data.message})`
)
.setImage(`${data.message}`)
.setTimestamp();

message.channel.send(embed);
},


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["hASS", "hassss"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "hass",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "hass",
  };