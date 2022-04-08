const fetch = require("node-fetch");

const url = process.env.OFFICE_URL;

module.exports = (discordBot) => {
  discordBot.hears("!quote", ["ambient"], async (bot, message) => {
    const d = await fetch(url)
    const { data } = await d.json();

    console.log("data", data);

    bot.reply(message, data.content);
  });
};
