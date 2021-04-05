const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  fetch("https://fortnite-api.com/v2/aes")
    .then((res) => res.json())
    .then((json) =>
      client.embedCreator(
        message.channel,
`> **Aes**

${json.data.mainKey} 

> **Version**

${json.data.updated} 

> **Build**

 ${json.data.build} `
      )
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "aes",
  category: "**Fortnite**",
  description: "**Obtenez la clé AES & version pour Fortnite**",
  usage: "aes",
};