require("dotenv").config();
const diceRoll = require('./src/func/dice');
const pingCall = require('./src/func/ping');
const aspigCall = require('./src/func/aspig');
const brolini = require('./src/func/brolini');
const magic8Ball = require('./src/func/magic8ball');
const tarot = require('./src/func/tarot');
const discordBotkit = require("botkit-discord");

const configuration = {
  token: process.env.TOKEN,
};

const discordBot = discordBotkit(configuration);

discordBot.on("ready", () => {
  console.log("Ready to rumble!! 🚀");
  
  diceRoll(discordBot);
  aspigCall(discordBot);
  brolini(discordBot);
  pingCall(discordBot);
  magic8Ball(discordBot);
  tarot(discordBot);
});

discordBot.on("error", (e) => {
  console.error("Breaking down!! 🤖");
  console.error(e);
});
