const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  if (!args.length)
    return client.embedCreator(
      message.channel,
      "Vous devez fournir le nom d'une pioche."
    );

  fetch(
    `https://benbotfn.tk/api/v1/cosmetics/br/search/all?lang=fr&searchLang=fr&matchMethod=starts&backendType=AthenaPickaxe&name=${args.join(
      "+"
    )}`
  )
    .then((res) => res.json())
    .then((json) => {
      try {
        client.embedCreator(
          message.channel,
`
> **Nom**

${json[0].name}

> **Description**

${json[0].description}

> **Tenue**

${json[0].set}

> **Rareté**

${json[0].rarity}

> **ID**

${json[0].id} 

> **Emplacement**

 ${json[0].path} 

**Tags**

\`\`\`
${json[0].gameplayTags} \`\`\` `,
          json[0].icons.icon
        );
      } catch (e) {
        client.embedCreator(
          message.channel,
          `Impossible de trouver la pioche portant ce nom.`
        );
      }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "pioche",
  category: "** 🇫🇷 **",
  description: "**Obtenez des informations sur un skin pour Fortnite**",
  usage: "pioche",
};