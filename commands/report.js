const Discord = require('discord.js')
const webhook = require("webhook-discord");

module.exports.run = async(client, message, args) => {
    const user = message.author.tag;
    const server = message.guild.name;
    const reason = args.join(" ");
    if (!args[0]) {
        return message.reply({embed: {
          color: "RED",
          description: 'Vous devez fournir un bug.'
        }});
      }
    if (!reason) {
        return message.reply({embed: {
          color: "RED",
          description: 'Vous ne pouvez pas envoyer de bug sans aucune raison.'
        }});
      }
    const Hook = new webhook.Webhook("https://discord.com/api/webhooks/780113268071989278/1evYQGzZ4BtD9Qub5D7jT_yu_52llV1E4yAInTgHZiGrDxeHoz4bPz5cganmcevZLVqZ");
    const msg = new webhook.MessageBuilder()
        .setName('Kirua')
        .setColor('RANDOM')
        .setTitle("Un bug a été détécter.")
        .addField("> Membre", user, true)
        .addField("> Serveur", server, true)
        .addField("> Raison", reason);
    Hook.send(msg).catch(err2 => client.logger.error(err2));
    message.reply({embed: {
      color: "RANDOM",
      description: 'Votre bug a été envoyer avec succès n\'hésite pas a rejoindre le serveur de **[support](https://discord.gg/URRQuYN)**.'
    }});
  }

exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["bug"],
  permlevel: "User",
};

exports.help = {
  name: "bug",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "bug",
};