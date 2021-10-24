module.exports = (discordBot) => {
  discordBot.hears("aspig", "ambient", (bot, message) => {
    bot.reply(message, "Ser du en dataprogrammerare... eller en kille med asperger?");
  });
}