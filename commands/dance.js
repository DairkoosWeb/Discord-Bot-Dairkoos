const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  if (!args.length)
    return client.embedCreator(
      message.channel,
      "<:yukierror:760031338832723999> **Vous devez fournir une dance** <:yukierror:760031338832723999>"
    );

  fetch(
    `https://benbotfn.tk/api/v1/cosmetics/br/search/all?lang=fr&searchLang=fr&matchMethod=starts&backendType=AthenaDance&name=${args.join(
      "+"
    )}`
  )
    .then((res) => res.json())
    .then((json) => {
      try {
        client.embedCreator(
          message.channel,
`
> **${json[0].name}**

${json[0].description}

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
          `<:yukierror:760031338832723999> **Erreur: Impossible de trouver la dance portant ce nom** <:yukierror:760031338832723999>`
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
  name: "dance",
  category: "** 🇫🇷 **",
  description: "**Obtenez des informations sur un skin pour Fortnite**",
  usage: "dance",
};