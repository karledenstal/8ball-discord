module.exports = (discordBot) => {
  discordBot.hears("Brolini?", ["ambient"], (bot, message) => {
    if (message.text.includes("?")) bot.reply(message, "Pasta Brolini! 🍝");
  });
}