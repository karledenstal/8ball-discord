require('dotenv').config();
const responses = require("./src/responses");
const discordBotkit = require("botkit-discord");

const configuration = {
  token: process.env.TOKEN
};

const discordBot = discordBotkit(configuration);

discordBot.hears("Brolini?", ["ambient"], (bot, message) => {
  bot.reply(message, "Pasta Brolini!");
});

discordBot.on("ready", () => {
  console.log('Ready to rumble!! 🚀');
});

discordBot.on("error", () => {
  console.error("Breaking down!! 🤖");
});

// The connector supports other types as well
discordBot.hears("!8ball", ["direct_message", "ambient"], (bot, message) => {
  const randomIndex = Math.floor(Math.random() * responses.length);

  bot.reply(message, "🎱 " + responses[randomIndex]);
});
