const Discord = require("discord.js");

  // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

module.exports = (client) => {
  const defaultSettings = {
    prefix: "d?",
    modLogChannel: "mod-log",
    modRole: "Moderator",
    adminRole: "Administrator",
    systemNotice: "true",
    lvlsEnabled: "false",
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.checkDays = (date) => {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73



  client.embedCreator = (channel, message, thumbnailImage) => {
    try {
      if (!thumbnailImage.length) thumbnailImage = client.user.avatarURL();
    } catch (e) {
      thumbnailImage = client.user.avatarURL();
    }

    const embedCreated = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        "Dairkoos",
        client.user.avatarURL(),
        ""
      )
      .setDescription(message)
      .setThumbnail(thumbnailImage)
      .setTimestamp()

    channel.send(embedCreated);
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


  client.randomInt = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.permlevel = (message) => {
    let permlvl = 0;

        // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

    const permOrder = client.config.permLevels
      .slice(0)
      .sort((p, c) => (p.level < c.level ? 1 : -1));

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (message.guild && currentLevel.guildOnly) continue;
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level;
        break;
      }
    }
    return permlvl;
  };
      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


  client.getSettings = (guild) => {
    client.settings.ensure("default", defaultSettings);
    if (!guild) return client.settings.get("default");
    const guildConf = client.settings.get(guild.id) || {};
    return { ...client.settings.get("default"), ...guildConf };
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.awaitReply = async (msg, question, limit = 60000) => {
    const filter = (m) => m.author.id === msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, {
        max: 1,
        time: limit,
        errors: ["time"],
      });
      return collected.first().content;
    } catch (e) {
      return false;
    }
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise") text = await text;
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 1 });

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(
        client.token,
        "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0"
      );

    return text;
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.loadCommand = (commandName) => {
    try {
      client.logger.log(`Chargement des commandes : ${commandName}`);
      const props = require(`../commands/${commandName}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Impossible de charger la commande : ${commandName}: ${e}`;
    }
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command)
      return `la commande : \`${commandName}\` ne semble pas exister, ni un alias. Réessayez!`;


        // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    if (command.shutdown) {
      await command.shutdown(client);
    }
    const mod =
      require.cache[require.resolve(`../commands/${command.help.name}`)];
    delete require.cache[
      require.resolve(`../commands/${command.help.name}.js`)
    ];
    for (let i = 0; i < mod.parent.children.length; i++) {
      if (mod.parent.children[i] === mod) {
        mod.parent.children.splice(i, 1);
        break;
      }
    }
    return false;
  };

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  Object.defineProperty(String.prototype, "toProperCase", {
    value: function () {
      return this.replace(
        /([^\W_]+[^\s-]*) */g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    },
  });


      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


  Object.defineProperty(Array.prototype, "random", {
    value: function () {
      return this[Math.floor(Math.random() * this.length)];
    },
  });

      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  client.wait = require("util").promisify(setTimeout);

  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    client.logger.error(`Uncaught Exception: ${errorMsg}`);
    console.error(err);
    process.exit(1);
  });


      // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


  process.on("unhandledRejection", (err) => {
    client.logger.error(`Unhandled rejection: ${err}`);
    console.error(err);
  });
};
