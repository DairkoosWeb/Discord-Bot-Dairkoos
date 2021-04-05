
const { MessageEmbed } = require("discord.js")

 exports.run = async (client, message, args) => {
 
 
 let color
        let member

        if (args.length == 0) {
            color = Math.floor(Math.random() * 16777215).toString(16)
        }

        if (args.length != 0) {

            if (!message.mentions.members.first()) {
                member = getMember(message, args[0]);
            } else {
                member = message.mentions.members.first();
            }

            if (!member) {
                color = args[0].split("#").join("")
            } else {
                color = member.displayHexColor
            }
        }

        const embed = new MessageEmbed()
            .setDescription("**#" + color + "**")
            .setColor(color)
        
        if (member) {
            embed.setDescription(member.user.toString())
            embed.setTitle(member.displayHexColor)
        }

        message.channel.send(embed).catch(() => {
            message.channel.send("La couleur que vous avez fournis est incorrect.")
        })

    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["color", "hexcolor"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "couleur",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "couleur",
  };