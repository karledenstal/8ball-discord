const fetch = require("node-fetch");

const url = process.env.TAROT_URL;

module.exports = (discordBot) => {
  discordBot.hears("!tarot", ["ambient"], async (bot, message) => {
    const get = await fetch(url)
      .then((d) => d.json())
      .then((response) => response.cards);
    const card = get[0];

    const msg = `🔮\n\n${card.name}\n${
      card.type === "major" ? "Major Arcana" : "Minor Arcana"
    }\n\n**Value:** ${card.value}\n\n**Meaning up:** ${
      card.meaning_up
    }\n\n**Meaning rev:** ${card.meaning_rev}`;

    bot.reply(message, msg);
  });
};
