

    var allowed = ["+", "-", "*", "/", "(", ")", " "];

module.exports.run = async(client, message, args) => {
        let exercise = args.join(" ");
        
      if (!exercise) {
        return message.channel.send({embed: {
            color: "RANDOM",
            description: "Veuillez fournir de bon argument."
          }});   
      }
      
        for (var i = 0; i < exercise.length; i++) {
            let c = exercise.charAt(i);
            let found = allowed.find((element) => element === c);
            
            if(c == "0") found = true;
            if(!(Number(c) || found))
            {
                return message.channel.send(
                    message.channel.send({embed: {
                        color: "RANDOM",
                        description: "Veuillez utlisé \`*\` pour la multiplication ou bien \` / \` pour la division"
                      }})
                    
                )}
                }
      
      let result = (new Function( 'return ' + exercise )());
    
      message.channel.send({embed: {
        color: "RANDOM",
        description: `Réponse : ${result}`
      }});
    };
    


    
exports.conf ={ 
  enable: true,
  guildOnly: false,
  aliases: ["math"],
  permlevel: "User",
};

exports.help = {
  name: "math",
  category: "fortnite",
  description: "obtenez la boutique fortnite",
  usage: "math",
};