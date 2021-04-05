const Discord = require("discord.js");


exports.run = async (client, message, args) => {
	let { data, region, verification } = getData(message);
	let embed = new Discord.MessageEmbed();
  embed.setColor('RANDOM');
	embed.setThumbnail(message.guild.iconURL({
		dynamic: true,
		size: 1024,
		format: 'png'
	}));
  embed.addField("**Nom du Serveur :**", `> • ${message.guild.name}`);
  embed.addField("**Owner :**", `> • ${message.guild.owner}`)
  embed.addField("**Url Perso**", `> • discord.gg/${message.guild.vanityURLCode}`, true)
	embed.addField("**ID du Serveur :**", `> • ${message.guild.id}`);
  embed.addField("**Région :**", `> • ${region.emoji} | ${region.display}`);
	embed.addField("**Serveur créer le :**", message.guild.createdAt.toLocaleString("fr-EU", { timeZone: "UTC" }), true);
	embed.addField(" **Boost :**", "> <a:FirstBoost:774567104481067079>"  + `• ${message.guild.premiumSubscriptionCount || '0'} ` + "<a:FirstBoost:774567104481067079>");
  embed.addField("**Membres :**", `> • ** ${message.guild.members.cache.filter((m) => !m.bot).size.toLocaleString()}**`);
  embed.addField("**Bots :**", `> • ** ${message.guild.members.cache.filter(member => member.user.bot).size}**`);
  embed.addField("**En ligne(s) :**", `> • ** ${message.guild.members.cache.filter(member => member.presence.status === 'online').size}**`);
  embed.addField("**Inactif(s) :**", `> • ** ${message.guild.members.cache.filter(member => member.presence.status === 'idle').size} **`);
  embed.addField("**Ne pas déranger(s) :**", `> • ** ${message.guild.members.cache.filter(member => member.presence.status === 'dnd').size} **`);
  embed.addField("**Hors ligne(s):**", `> • ** ${message.guild.members.cache.filter(member => member.presence.status === 'offline').size}**`);
	embed.addField("** Vérification :**", `> • ${verification.display}\n${verification.value}`);
	embed.addField("**Rôles :**", data.roles.map((d) => `> • ${d.name}: **${d.value}**`).join('\n'));
	embed.addField("**Salons :**", data.channels.map((d) => `> • ${d.name}: **${d.value}**`).join('\n'));
	embed.addField("**Emojis :**", data.emojis.map((d) => `> • ${d.name}: **${d.value}**`).join('\n'));
	embed.setTimestamp();

	return message.channel.send(embed);

}


function getData(message){

  return Object.defineProperties(new Object(), {
	data: {
	  value: otherData(message),
	  writable: false
	},
	region: {
	  value: getRegion(message),
	  writable: false
	},
	verification: {
	  value: getVerificationLevel(message),
	  writable: false
	}
  });


}

function otherData(message){

  return {
	"roles":[{
		name: "Total des rôles",
		value: message.guild.roles.cache.size.toLocaleString()
	},{
	  name: "Rôle le plus élevé",
	  value: message.guild.roles.highest.toString()
	},{
	  name: "Code Couleur du rôle le plus élevé",
	  value: message.guild.roles.highest.hexColor
	},{
	  name: "Rôles Mentionnables",
	  value: message.guild.roles.cache.filter((r) => r.mentionable).size.toLocaleString()
	},{
	  name: "Rôles gérés",
	  value: message.guild.roles.cache.filter((r) => r.managed).size.toLocaleString()
	}],
	"channels":[{
	  name: "Nombre total de salons",
	  value: message.guild.channels.cache.size
	},{
	  name: "Catégories",
	  value: message.guild.channels.cache.filter((c) => c.type == "category").size.toLocaleString()
	},{
	  name: "Salons Textuelles",
	  value: message.guild.channels.cache.filter((c) => c.type == "text").size.toLocaleString()
	},{
	  name: "Salons Vocaux",
	  value: message.guild.channels.cache.filter((c) => c.type == "voice").size.toLocaleString()
	},{
	  name: "Salon AFK",
	  value: message.guild.afkChannel == null ? "None" : message.guild.afkChannel.toString()
	}],
	"emojis":[{
	  name: "Nombres totals des émojis",
	  value: `${message.guild.emojis.cache.size.toLocaleString()}/${[{num: 0, value: 50},{num: 1, value: 100},{num: 2, value: 150},{num: 3, value: 250}].find((d) => d.num == message.guild.premiumTier).value.toLocaleString()}`
	},{
	  name: "émojis png",
	  value: message.guild.emojis.cache.filter((e) => !e.animated).size.toLocaleString()
	},{
	  name: "émojis gif",
	  value: message.guild.emojis.cache.filter((e) => e.animated).size.toLocaleString()
	}]
  }

}

function getRegion(message){

  let USregions = [{name: "us-central", value: "US Central"},{name: "us-east", value: "US East"},{name: "us-south", value: "US South"},{name: "us-west", value: "US West"}];
  let USregion = USregions.find((d) => d.name == message.guild.region);
  return [{
	name: ["us-central","us-east","us-south","us-west"],
	display: USregion ? USregion.value : undefined ,
	emoji: "<:flag_us:728305677088456704>"
  },{
	name: ["japan"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_jp:728304588717031584>"
  },{
	name: ["russia"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_ru:728304674624503848>"
  },{
	name: ["singapore"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_sg:728305052086960150>"
  },{
	name: ["southafrica"],
	display: "South Africa",
	emoji: "<:flag_za:728305330416648214>"
  },{
	name: ["brasil"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_br:728304014352973944>"
  },{
	name: ["sydney"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_hm:728305580967723089>"
  },{
	name: ["europe"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_eu:728303710576443485>"
  },{
	name: ["hongkong"],
	display: "Hong Kong",
	emoji: "<:flag_hk:728304166371590245>"
  },{
	name: ["india"],
	display: message.guild.region.slice(0,1).toUpperCase()+message.guild.region.slice(1).toLowerCase(),
	emoji: "<:flag_in:728304537651118101>"
  }].find((d) => d.name.includes(message.guild.region));

}

function getVerificationLevel(message){

  return [{
	name: "NONE",
	display: " Aucune",
	value: "> • Libre"
  },{
	name: "LOW",
	display: " Faible",
	value: "> • Doit avoir une adresse email vérifiée sur son compte Discord"
  },{
	name: "MEDIUM",
	display: " Moyen",
	value: "> • Doit également être enregistré sur Discord pendant plus de 5 minutes"
  },{
	name: "HIGH",
	display: " Haut",
	value: "> • Doit également être membre de ce serveur pendant plus de 10 minutes"
  },{
	name: "VERY_HIGH",
	display: " Tres haut",
	value: "> • Doit avoir un téléphone vérifié sur son compte Discord"
  }].find((d) => d.name == message.guild.verificationLevel);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["servstats", "serveurtats"],
    permLevel: "User",
  };
  
  exports.help = {
    name: "serveurinfo",
    category: "**Bot**",
    description: "**Affiche toutes les commandes disponibles**",
    usage: "serveurinfo",
  }