var Discord = require("discord.io");
var logger = require("winston"); 
var auth = require("./auth.json");
//Below configures logger settings

logger.remove(logger.transports.Console); 
logger.add(new logger.transports.Console,
{
  colorize: true
}); 
logger.level = 'debug'; 
//Init the bot

var bot = new Discord.Client(
{
  token: auth.token,
  autorun: true
});

bot.on("ready", function(evt)
{
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username);
});

bot.on('message', function(user, userID, channelID, message, evt)
{     //looks for commands that start with a !
       if(message.substring(0,1) == "!")
      {
        var args = message.substring(1).split(' ');
        var cmd = args[0]; 
        
        args = args.splice(1);
        switch(cmd)
          {
            case 'ping':
              bot.sendMessage(
              {
                to: channelID,
                message: "Pong!"
              }
              );
              break;
            default:
              bot.sendMessage(
              {
                to: channelID,
                message: "OwO! Thwat dwaesn't exwist youw swilly gwoose!"
              }
              );
              break; 
          }
      }
}); 