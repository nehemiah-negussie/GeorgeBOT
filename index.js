const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')

bot.pokemon = require('./pokemon.json') 

bot.once('ready', () => {
  console.log('Ready!')
})

bot.on('message', (message) => {
  // read only messages from poketwo bot
  if (message.author.id == 716390085896962058){
    // if message has embed
    if (message.embeds[0]){
      var command = ["p!h", message.channel.id]
      var title = message.embeds[0].title
      
      // check for spawning
      if (title == "A wild pokémon has appeared!"){
        fs.appendFile('commands.txt', "\n", (error) => {
          if(error) throw err;
        })
        fs.appendFile('commands.txt', command.toString(), (error) => {
          if(error) throw err;   
        })
        fs.appendFile('commands.txt', "\n", (error) => {
          if(error) throw err;
        })
      }
      else if (title.substring(title.length - 32) == "A new wild pokémon has appeared!"){
        fs.appendFile('commands.txt', "\n", (error) => {
          if(error) throw err;
        })
        fs.appendFile('commands.txt', command.toString(), (error) => {
          if(error) throw err;   
        })
        fs.appendFile('commands.txt', "\n", (error) => {
          if(error) throw err;
        })
      
    }
    }
    // Check if hint is given
    else if (message.toString().substring(0, 15) == "The pokémon is "){
      // remove spaces, periods, and slashes
      var blanks = message.toString().substring(15)
      blanks = blanks.replace(/\\/g, '');
      blanks = blanks.replace(/\./g, '');
      var x = new Boolean(true);
      var c = bot.pokemon[i]
      // iterate through pokemon.json and check for pokemon which match criteria
      for (var i = 0; i < bot.pokemon.length; i++){
        c = bot.pokemon[i]
        x = true
        if (c.length !== blanks.length){
          x = false
        }
        else {
          for (var j = 0; j < blanks.length; j++){
            if (blanks[j] !== '_'){
              if (c[j] !== blanks[j]){
                x = false
              }
            }
          }
        }

        if (x){
          // save pokemon name and channel to file
          var command = ["p!c ".concat(c), message.channel.id]
          console.log(c)
          fs.appendFile('commands.txt', "\n", (error) => {
            if(error) throw err;
          })
          fs.appendFile('commands.txt', command.toString(), (error) => {
            if(error) throw err;
          })
          fs.appendFile('commands.txt', "\n", (error) => {
            if(error) throw err;
          })
        }
      }
    }
  }
  
}
)


bot.login('TOKEN')
