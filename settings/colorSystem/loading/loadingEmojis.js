const fs = require("fs");
const perServerInfo = JSON.parse(fs.readFileSync("././data.json"));

module.exports.run = async (bot, message, arguments, discord) => {
    const emojiCollector = require(`./emojiCollector.js`);

    const greyEmoji = bot.emojis.cache.find(emoji => emoji.name === "Grijs");
    const darkGreyEmoji = bot.emojis.cache.find(emoji => emoji.name === "donkerGrijs");
    const blackEmoji = bot.emojis.cache.find(emoji => emoji.name === "Zwart");
    const whiteEmoji = bot.emojis.cache.find(emoji => emoji.name === "Wit");
    const darkBlueEmoji = bot.emojis.cache.find(emoji => emoji.name === "donkerBlauw");
    const blueEmoji = bot.emojis.cache.find(emoji => emoji.name === "Blauw");
    const lightBlueEmoji = bot.emojis.cache.find(emoji => emoji.name === "lichtBlauw");
    const appleBlueEmoji = bot.emojis.cache.find(emoji => emoji.name === "Appelblauwzeegroen");
    const darkGreenEmoji = bot.emojis.cache.find(emoji => emoji.name === "lichtBlauw");
    const greenEmoji = bot.emojis.cache.find(emoji => emoji.name === "Groen");
    const lightGreenEmoji = bot.emojis.cache.find(emoji => emoji.name === "lichtGroen");
    const yellowEmoji = bot.emojis.cache.find(emoji => emoji.name === "Geel");
    const lightYellowEmoji = bot.emojis.cache.find(emoji => emoji.name === "lichtGeel");
    const orangeEmoji = bot.emojis.cache.find(emoji => emoji.name === "Oranje");
    const lightRedEmoji = bot.emojis.cache.find(emoji => emoji.name === "lichtRood");
    const redEmoji = bot.emojis.cache.find(emoji => emoji.name === "Rood");
    const purpleEmoji = bot.emojis.cache.find(emoji => emoji.name === "Paars");
    const pinkEmoji = bot.emojis.cache.find(emoji => emoji.name === "Roze");

    const colorQuestion = new discord.MessageEmbed()
        .setTitle("**Welke kleur wil je instellen?**")
        .setDescription("Klik op de kleur die jij wil gebruiken!")
        .setColor(perServerInfo.embedColor);

    const loadingColors = new discord.MessageEmbed()
        .setTitle("**Aan het laden...**")
        .setDescription("Wacht tot alle kleuren zijn geladen.")
        .setColor(perServerInfo.embedColor);

    message.channel.send(loadingColors).then(async msg => {
        await msg.react(blackEmoji);
        await msg.react(darkGreyEmoji);
        await msg.react(greyEmoji);
        await msg.react(whiteEmoji);
        await msg.react(darkBlueEmoji);
        await msg.react(blueEmoji);
        await msg.react(lightBlueEmoji);
        await msg.react(appleBlueEmoji);
        await msg.react(darkGreenEmoji);
        await msg.react(greenEmoji);
        await msg.react(lightGreenEmoji);
        await msg.react(yellowEmoji);
        await msg.react(lightYellowEmoji);
        await msg.react(orangeEmoji);
        await msg.react(lightRedEmoji);
        await msg.react(redEmoji);
        await msg.react(purpleEmoji);
        await msg.react(pinkEmoji);
        await msg.react("❌");
        await msg.edit(colorQuestion);

        await emojiCollector.run(bot, message, discord, msg);
    });
};