const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
console.log(`${bot.user.tag} is online!`);
});

bot.on(`message`, msg  => {
    if (msg.content === `$ping`) {
        message.channel.send("Pong!");
    }
});

bot.login(process.env.BOT_TOKEN);