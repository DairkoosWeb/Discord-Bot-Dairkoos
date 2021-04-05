exports.run = async (client, message, args, level) => {
    const code = args.join(" ");
    try {
      const evaled = eval(code);
      const clean = await client.clean(client, evaled);
      client.embedCreator(message.channel, `${clean}`);
    } catch (err) {
      client.embedCreator(
        message.channel,
        `ERREUR : ${await client.clean(client, err)}`
      );
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Owner",
  };
  
  exports.help = {
    name: "eval",
    category: "System",
    description: "",
    usage: "eval [...code]",
  };