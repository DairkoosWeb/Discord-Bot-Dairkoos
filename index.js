 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


const { Invite } = require("discord.js");
const Discord = require("discord.js");
const Enmap = require("enmap");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const client = new Discord.Client({ 
  ws: {
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_PRESENCES', 'GUILD_PRESENCES']
  },
  partials: ['MESSAGE', 'REACTION'] 
});


 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


client.config = require("./config.js");

client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);

client.commands = new Enmap();
client.aliases = new Enmap();

client.settings = new Enmap({ name: "settings" });


client.points = new Enmap({ name: "points" });


 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73




client.on("ready", () => {
  const statuses = [
    () => `${client.guilds.cache.size} Serveurs`,
    () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Membres`,
    () => `k.help`
  ]
  let i = 0
  setInterval(() => {
    client.user.setActivity(statuses[i](), {type: 'WATCHING'})
    i = ++i % statuses.length
  }, 1e4)

})



 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73



client.on("guildCreate", gui => {
  let embed = new Discord.MessageEmbed()
        .setColor('#60cc2f')
        .addField('Nom Du Serveur', `> ${gui.name}`,)
        .addField('Owner Du Serveur', `> ${gui.owner}`,)
        .addField('ID Du Serveur', `> ${gui.id}`,)
        .addField('Nombres de Membres', `> ${gui.memberCount}`,)
        .setTimestamp()
        .setThumbnail(gui.iconURL({ dynamic: true }))
        client.guilds.cache.get("id serveur").channels.cache.get("id salon nigga").send(embed)
});


client.on("guildDelete", gui =>{
  let embed = new Discord.MessageEmbed()
  .setColor('#ff0004')
  .addField('Nom Du Serveur', `> ${gui.name}`,)
  .addField(' Owner Du Serveur', `> ${gui.owner}`,)
  .addField('ID Du Serveur', `> ${gui.id}`,)
  .addField('Nombres de Membres', `> ${gui.memberCount}`,)
  .setThumbnail(gui.iconURL({ dynamic: true }))
  .setTimestamp()
  client.guilds.cache.get("id serveur").channels.cache.get("id salon nigga").send(embed)
});


 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73




const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.logger.log(` ${cmdFiles.length} commands chargé.`);
  cmdFiles.forEach((f) => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  const evtFiles = await readdir("./events/");
  client.logger.log(` ${evtFiles.length} Events chargé.`);
  evtFiles.forEach((file) => {
    const eventName = file.split(".")[0];
    client.logger.log(`Event en chargement : ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });

  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  client.login(client.config.token);
};

init();