const Discord = require("discord.js");
const randomPuppy = require("random-puppy");


exports.run = async (client, message, args) => {
		const subReddits = ["meme", "me_irl", "dankmeme"];
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];
		const img = await randomPuppy(random);

		const memeEmbed = new Discord.MessageEmbed()
        .setImage(img)
        .setColor('RANDOM')

		message.channel.send({embed: memeEmbed});
  }

exports.conf ={ 
    enable: true,
    guildOnly: false,
    aliases: [],
    permlevel: "User",
};

exports.help = {
    name: "meme",
    category: "fortnite",
    description: "obtenez la boutique fortnite",
    usage: "meme",
};