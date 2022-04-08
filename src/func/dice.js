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

module.exports = (discordBot) => {
  discordBot.hears("!roll", ["ambient"], (bot, message) => {
    const embed = new discordBot.RichEmbed();
    const clean = message.text.replace("!roll", "");
    const d = clean.split("d");
    const amount = d[0].trim();
    const die = d[1].trim();

    if (amount > 24) {
      bot.reply(message, "Max 24 dies can be rolled");
    } else {
      const { result, allDice } = dice.roll(die, amount);

      embed.addField("Rolled 🎲", result);

      for (var i = 0; i < allDice.length; i++) {
        const idx = parseFloat(i) + 1;
        embed.addField("Dice " + idx + " rolled:", allDice[i]);
      }

      embed.setColor("BLACK");

      bot.reply(message, embed);
    }
  });
};
