const config = {
  // id de l'owner du bot sois pas con met pas l'id du bot nigga 


  "ownerID": "id ",

  "admins": [],

   // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    "support": [],

  "token": "met ton token ici fdp et pense à me credit",



   // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


  defaultSettings: {
    prefix: "d?",
    modLogChannel: "mod-log",
    modRole: "Moderator",
    adminRole: "Administrator",
    systemNotice: "true",
    lvlsEnabled: "false",
  },


   // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

  permLevels: [
    {
      level: 0,
      name: "User",
      check: () => true,
    },

       // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

    {
      level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.cache.find(
            (r) =>
              r.name.toLowerCase() === message.settings.modRole.toLowerCase()
          );
          if (modRole && message.member.roles.cache.has(modRole.id))
            return true;
        } catch (e) {
          return false;
        }
      },
    },


     // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    {
      level: 3,
      name: "Administrator",
      check: (message) => {
        try {
          const adminRole = message.guild.roles.cache.find(
            (r) =>
              r.name.toLowerCase() === message.settings.adminRole.toLowerCase()
          );
          return adminRole && message.member.roles.cache.has(adminRole.id);
        } catch (e) {
          return false;
        }
      },
      },

     // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    {
      level: 4,
      name: "Server Owner",
      check: (message) =>
        message.channel.type === "text"
          ? message.guild.ownerID === message.author.id
            ? true
            : false
          : false,
    },
     // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    {
      level: 8,
      name: "Bot Support",
      check: (message) => config.support.includes(message.author.id),
    },


     // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    {
      level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id),
    },

     // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    {
      level: 10,
        name: "Bot Owner",
      check: (message) => message.client.config.ownerID === message.author.id,
    },
  ],
};
 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

module.exports = config;
