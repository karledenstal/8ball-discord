require('dotenv').config();
const responses = require("./src/responses");
const discordBotkit = require("botkit-discord");

const configuration = {
  token: process.env.TOKEN
};

const discordBot = discordBotkit(configuration);

discordBot.on("ready", () => {
  console.log('Ready to rumble!! 🚀');

  discordBot.hears("Brolini?", ["ambient"], (bot, message) => {
    bot.reply(message, "Pasta Brolini!");
  });

  discordBot.hears("!8ball", ["direct_message", "ambient"], (bot, message) => {
    const randomIndex = Math.floor(Math.random() * responses.length);
  
    bot.reply(message, "🎱 " + responses[randomIndex]);
  });
});

discordBot.on("error", () => {
  console.error("Breaking down!! 🤖");
});
