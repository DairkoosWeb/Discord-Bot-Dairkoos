const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
    color: 'RANDOM',
    thumbnail: {
        url: '',
    },
    fields: [
      {
        name: 'Owner',
        value: '> \`reload\`, \`eval\`',
      },
      {
        name: 'Kirua',
        value: '> \`botinfo\`, \`credit\`, \`invite\`,\`ping\`, \`status\`',
      },
      {
        name: 'Modérations',
        value: '> \`clear\`, \`kick\`, \`ban\`, \`unban\`, \`rename\` \`slowmode\`',
      },
      {
        name: 'Informations',
        value: '> \`activité\`, \`avatar\`,\`statusinvite\`, \`inviteinfo\`, \`listerole\`, \`saloninvite\`, \`serveurinfo\`, \`serveuricon\`, \`userid\`, \`userinfo\`, \`salonid\`, \`emojiliste\` ',
      },
      {
        name: 'Backup',
        value: '> \`create-backup\`, \`load-backup\`, \`info-backup\`',
      },
      {
        name: 'Ticket',
        value: '> \`setlogs\`, \`ticket\`, \`close\`',
      },
      {
        name: 'Giveaway',
        value: '> \`start-giveaway\`, \`end-giveaway\`, \`reroll-giveaway\`',
      },
      {
        name: 'Musiques',
        value: '> \`clear-queue\`, \`filtre\`,\`filtres\`, \`loop\`, \`np\`, \`lyrics\`, \`pause\`, \`play\`, \`queue\`, \`resume\`, \`shuffle\`, \`skip\`, \`stop\`, \`volume\` ',
      },
      {
        name: 'Akinator',
        value: '> \`akistart\`',
      },
      {
        name: 'Fun',
        value: '> \`bad\`,\`baka\`,\`chat\`,\`chien\`,\`clyde\`,\`couleur\`, \`kiss\`, \`math\`, \`meme\`, \`meteo\`, \`oiseaux\`, \`ours\`, \`playstore\`, \`qi\`, \`randomavatar\`, \`say\`, \`supreme\`,\`sondage\`, \`tiktok\`, \`poke\`, \`slap\`, \`pat\`, \`spotify\`,\`djs\` ',
      },
      {
        name: 'Fortnite',
          value: '> \`aes\`,\`camouflage\`,\`pioche\`, \`planeur\`, \`sac\`,\`skin\`, \`devserver\`, \`versiondev\`, \`leaks\`, \`shopftn\`, \`blog\`, \`map\`, \`aesall\`, \`statusftn\`',
      },
      {
        name: 'Fall Guys',
        value: '> \`shop\`, \`fskin\`, \`femote\`, \`fcelebration\`, \`fcolor\`, \`face\`, \`pattern\`',
      },
      {
        name: 'Liens',
        value: '**[Invitation](https://discord.com/oauth2/authorize?client_id=801965428288651314&scope=bot&permissions=2146958847&redirect_uri=https://discord.gg/DpTtfEd4Fe&response_type=code) | [Support](https://discord.gg/DtgteJq8Jm) | [Dairkoos](https://twitter.com/intent/follow?screen_name=Dairkoos_)**',
      },
    ],
    image: {
      url: '',
    },
    timestamp: new Date(),
    footer: {
      text: 'Kirua ©',
      icon_url: client.user.avatarURL(),
    },
  }});
}


exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: ["kiruahelp"],
    permlevel: "User",
};

exports.help = {
    name: "help",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "help",
};
