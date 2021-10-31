const responses = require("../responses");

module.exports = (discordBot) => {
  discordBot.hears("!8ball", ["direct_message", "ambient"], (bot, message) => {
    console.log('message', message);
    console.log('bot', bot);
    const randomIndex = Math.floor(Math.random() * responses.length);

    bot.reply(message, responses[randomIndex]);
  });
};
