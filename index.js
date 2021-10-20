const discordBotkit = require('botkit-discord');
require('dotenv').config();

const configuration = {
    token: process.env.BOT_TOKEN
};

const discordBot = discordBotkit(configuration);

discordBot.hears("Brolini?", ["ambient"], (bot, message) => {
  bot.reply(message, "Pasta Brolini!");
});

// The connector supports other types as well
discordBot.hears('!8ball', ["direct_message", "ambient"], (bot, message) => {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it",
    "Yes",
    "Most Likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",

    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",

    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",

    "It is known",
    "Leave me alone, bruh",
    "Pasta Brolini",
    ":nat:"
  ];
  
  const randomIndex = Math.floor(Math.random() * responses.length);

  bot.reply(message, "🎱 " + responses[randomIndex]);
});
