const Discord = require('discord.js')
const webhook = require("webhook-discord");

module.exports.run = async(client, message, args) => {
    const user = message.author.tag;
    const server = message.guild.name;
    const reason = args.join(" ");
    if (!args[0]) {
        return message.reply({embed: {
          color: "#f7b9ff",
          description: 'Vous devez fournir une suggestion.'
        }});
      }
    if (!reason) {
        return message.reply({embed: {
          color: "#f7b9ff",
          description: 'Vous ne pouvez pas envoyer le message sans aucune suggestion.'
        }});
      }
    const Hook = new webhook.Webhook("https://discord.com/api/webhooks/767293127215677460/gq9DiCVe9L2oAVnoFKaovrY82rrps6-_GEST_Peh3qlIcI2UTAnkroSJQeVfaaZhwodd");
    const msg = new webhook.MessageBuilder()
        .setName('Yuki')
        .setColor('#f7b9ff')
        .setTitle("Une Suggestion a été envoyé.")
        .addField("> Membre", user, true)
        .addField("> Serveur", server, true)
        .addField("> Surggestion", reason);
    Hook.send(msg).catch(err2 => client.logger.error(err2));
    message.reply({embed: {
      color: "#f7b9ff",
      description: 'Votre suggestion a été envoyer avec succès n\'hésite pas a rejoindre le serveur de **[support](https://discord.gg/URRQuYN)**.'
    }});
  }

exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["suggestion"],
  permlevel: "User",
};

exports.help = {
  name: "suggestion",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "suggestion",
};