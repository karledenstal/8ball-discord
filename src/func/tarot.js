const fetch = require("node-fetch");

const url = process.env.TAROT_URL;

module.exports = (discordBot) => {
  discordBot.hears("!tarot", ["ambient"], async (bot, message) => {
    const get = await fetch(url)
      .then((d) => d.json())
      .then((response) => response.cards);
    const card = get[0];
    const rev = Math.round(Math.round(Math.random()));

    if (rev === 0) {
      const msg = `🔮\n\n${card.name} (reversed)\n${
        card.type === "major" ? "Major Arcana" : "Minor Arcana"
      }\n\n**Value:** ${card.value}\n\n**Meaning:** ${card.meaning_rev}`;

      return bot.reply(message, msg);
    } else {
      const msg = `🔮\n\n${card.name} (upright)\n${
        card.type === "major" ? "Major Arcana" : "Minor Arcana"
      }\n\n**Value:** ${card.value}\n\n**Meaning:** ${card.meaning_up}`;
  
      bot.reply(message, msg);
    }
  });
};
