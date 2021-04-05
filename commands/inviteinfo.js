const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
        const inviteCode = args[0];
        client.fetchInvite(inviteCode)
            .then(invite => {
                if(invite.createdAt != null) timestamp = invite.createdAt;
                    const inviteInfoEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle("Informations trouvé")
                    .addField("Invite par", `${invite.inviter.username}`)
                    .addField("Serveur", `${invite.guild}`)
                    .addField("Membre en ligne(s)", `> ${invite.presenceCount}/${invite.memberCount}`)
                    .addField("Crée le", `> ${invite.guild.createdAt}`);

                    message.channel.send({embed: inviteInfoEmbed});

            }).catch (error => {
                    const inviteInfoErrorEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription("> Impossible d'obtenir les informations du serveur à partir du lien fournis.")

                    message.channel.send({embed: inviteInfoErrorEmbed});
            });
    }, 

    exports.conf ={ 
        enable: true,
        guildOnly: false,
        aliases: ["inviteinfo","infoinvite"],
        permlevel: "User",
    };
    
    exports.help = {
        name: "inviteinfo",
        category: "fortnite",
        description: "obtenez la boutique fortnite",
        usage: "inviteinfo",
    };