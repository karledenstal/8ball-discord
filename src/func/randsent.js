const words = require("../words");

function randgen() {
  return Math.floor(Math.random() * 5);
}

module.exports = (discordBot) => {
  discordBot.hears("!randsen", ["ambient"], (bot, message) => {
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const rand3 = Math.floor(Math.random() * 10);
    const rand4 = Math.floor(Math.random() * 10);
    const rand5 = Math.floor(Math.random() * 10);
    const rand6 = Math.floor(Math.random() * 10);

    const content = `The ${words.adjectives[rand1]} ${words.nouns[rand2]} ${words.adverbs[rand3]} ${words.verbs[rand4]} because some ${words.nouns[rand1]} ${words.adverbs[rand1]} ${words.verbs[rand1]} ${words.preposition[rand1]} a ${words.adjectives[rand2]} ${words.nouns[rand5]} which, became a ${words.adjectives[rand3]} ${words.adjectives[rand4]} ${words.nouns[rand6]}.`;

    bot.reply(message, content);
  });
};
