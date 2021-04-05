exports.run = async (client, message, args) => {
    if (!args.length)
      return client.embedCreator(
        message.channel,
        "Veuillez saisir un nombre de messages à supprimer."
      );
  
    if (!message.member.guild.me.hasPermission("MANAGE_MESSAGES"))
      return client.embedCreator(
        message.channel,
        "Je n'ai pas les permissions nécessaires pour faire cela."
      );
  
    message.delete();
  
    let messageAmtToDel = args[0];
  
    if (messageAmtToDel > 100)
      return client.embedCreator(
        message.channel,
        "Vous ne pouvez pas supprimé plus de 100 messages. "
      );
  
    message.channel.messages
      .fetch({
        limit: messageAmtToDel,
      })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["clean", "clear", "prune"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "clear",
    category: "Moderation",
    description: "",
    usage: "clear",
  };