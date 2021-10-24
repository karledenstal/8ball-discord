module.exports = (discordBot) => {
  discordBot.hears("!ping", ["ambient"], (bot, message) => {
    bot.reply(message, `🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);
  })
} 