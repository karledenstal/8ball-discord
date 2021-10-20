require("dotenv").config();
const responses = require("./src/responses");
const discordBotkit = require("botkit-discord");

const configuration = {
  token: process.env.TOKEN,
};

const discordBot = discordBotkit(configuration);

var dice = {
  sides: 6,
  amount: 1,
  roll: function (sides = this.sides, amount = this.amount) {
    var a = [];
    var result = 0;

    for (var i = 0; i < amount; i++) {
      a[i] = Math.floor(Math.random() * sides) + 1;
      console.log("dice " + i + " rolled: " + a[i]);
      result += a[i];
    }

    return {
      allDice: a,
      result,
    };
  },
};

discordBot.on("ready", () => {
  console.log("Ready to rumble!! 🚀");

  discordBot.hears("!dice", ["ambient"], (bot, message) => {
    const embed = new discordBot.RichEmbed();
    const clean = message.text.replace("!dice", "");
    const d = clean.split("d");

    const { result, allDice } = dice.roll(d[1].trim(), d[0].trim());

    embed.addField("Rolled 🎲", result);
    
    for(var i = 0; i < allDice.length; i++) {
      const idx = parseFloat(i) + 1;
      embed.addField("Dice " + idx + " rolled:", allDice[i]);
    }

    embed.setColor("BLACK");

    bot.reply(message, embed);
  });

  discordBot.hears("Brolini?", ["ambient"], (bot, message) => {
    if (message.text.includes("?")) bot.reply(message, "Pasta Brolini! 🍝");
  });

  discordBot.hears("!8ball", ["direct_message", "ambient"], (bot, message) => {
    const randomIndex = Math.floor(Math.random() * responses.length);

    bot.reply(message, responses[randomIndex]);
  });
});

discordBot.on("error", () => {
  console.error("Breaking down!! 🤖");
});
