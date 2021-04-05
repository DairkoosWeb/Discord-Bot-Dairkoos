const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
    let usr = message.guild.members.cache.get(args[0]) || message.mentions.users.first()

    if (!usr) {
        usr = message.member.user
    }

    const mbr = message.guild.members.cache.find(member => member.user.id === usr.id)
    if (!mbr) {
        const emb = new MessageEmbed()
            .setDescription(`Impossible de trouver les informations ${args[0]}`)
            .setColor("RED")
        return message.channel.send(emb)
    }
    let pres
    let hasPres = false
    if (mbr.presence.activities.length != 0) hasPres = true
    if (hasPres == true) {
        if (mbr.presence.activities[0].type === "LISTENING") {
            pres = `Écoute** ${mbr.presence.activities[0].details}**  sur **${mbr.presence.activities[0].name}**`
        } else if (mbr.presence.activities[0].type === "CUSTOM_STATUS") {
            pres = `Custom status | \`${mbr.presence.activities[0].state}\``
        } else if (mbr.presence.activities[0].type === "STREAMING" && mbr.presence.activities[0].url.includes("twitch.tv")) {
            pres = `Streaming **${mbr.presence.activities[0].name}** sur **Twitch**`
        } else {
            let lower = mbr.presence.activities[0].type.toLowerCase()
            pres = `${capitalise(lower)} **${mbr.presence.activities[0].name}**`
        }
    } else {
        pres = "Aucune activité trouvé."
    }
    const user = mbr.user
    let roles = [];
    mbr.roles.cache.forEach(role => roles.push(role.id))
    roles.pop()
    roles = roles.join('>, <@&')
    let r
    if (roles.length === 0) {
        r = `Aucun Rôle`
    } else {
        r = `<@&${roles}>`
    }
    let isBot
    if (user.bot == false) {
        isBot = "Non"
    } else {
        isBot = "Oui"
    }
    let nick;
    if (mbr.nickname === null) {
        nick = "Aucun pseudonyme sur ce serveur."
    } else {
        nick = mbr.nickname
    }
    const userinfo = new MessageEmbed()
        .setDescription(`Information de : ${mbr.toString()}`)
        .setColor("PURPLE")
        .addField(`Pseudo`, mbr.user.username, true)
        .addField(`Tags`, mbr.user.discriminator, true)
        .addField(`Identifiant`, mbr.user.id, true)
        .addField(`Pseudonyme`, nick, true)
        .addField(`Bot`, isBot, true)
        .addField(`Crée le`, mbr.user.createdAt)
        .addField(`Rejoins le`, mbr.joinedAt)
        .addField(`Activité`, `${pres}`)
        .addField(`Rôles (${mbr.roles.cache.size-1})`, `${r}`)
        .setThumbnail(mbr.user.avatarURL())
    message.channel.send(userinfo)

    function capitalise (s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
}

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["ui","uinfo"],
    permlevel: "User",
};

exports.help = {
    name: "userinfo",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "userinfo",
};