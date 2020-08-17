module.exports.run = async (bot, message, discord, msg) => {
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

    const filter = (reaction, user) => (reaction.emoji === greyEmoji ||
        reaction.emoji === darkGreyEmoji ||
        reaction.emoji === blackEmoji ||
        reaction.emoji === whiteEmoji ||
        reaction.emoji === darkBlueEmoji ||
        reaction.emoji === blueEmoji ||
        reaction.emoji === lightBlueEmoji ||
        reaction.emoji === appleBlueEmoji ||
        reaction.emoji === darkGreenEmoji ||
        reaction.emoji === greenEmoji ||
        reaction.emoji === lightGreenEmoji ||
        reaction.emoji === yellowEmoji ||
        reaction.emoji === lightYellowEmoji ||
        reaction.emoji === orangeEmoji ||
        reaction.emoji === lightRedEmoji ||
        reaction.emoji === redEmoji ||
        reaction.emoji === purpleEmoji ||
        reaction.emoji === pinkEmoji ||
        reaction.emoji === '❌') && user.id === message.author.id;

    const blackColor = require(`../colors/black.js`);
    const darkGreyColor = require(`../colors/darkGrey.js`);
    const greyColor = require(`../colors/grey.js`);
    const whiteColor = require(`../colors/white.js`);
    const darkBlueColor = require(`../colors/darkBlue.js`);
    const blueColor = require(`../colors/blue.js`);
    const lightBlueColor = require(`../colors/lightBlue.js`);
    const appleBlueColor = require(`../colors/appleBlue.js`);
    const darkGreenColor = require(`../colors/darkGreen.js`);
    const greenColor = require(`../colors/green.js`);
    const lightGreenColor = require(`../colors/lightGreen.js`);
    const yellowColor = require(`../colors/yellow.js`);
    const lightYellowColor = require(`../colors/lightYellow.js`);
    const orangeColor = require(`../colors/orange.js`);
    const lightRedColor = require(`../colors/lightRed.js`);
    const redColor = require(`../colors/red.js`);
    const purpleColor = require(`../colors/purple.js`);
    const pinkColor = require(`../colors/pink.js`);
    const cancelColor = require(`../colors/cancel.js`);

    msg.awaitReactions(filter, {
        time: 36000,
        max: 1
    }).then(collected => {
        const emojiCollected = collected.first();

        switch (emojiCollected.emoji) {
            case blackEmoji:
                blackColor.run(bot, message, discord, msg);
                break;
            case darkGreyEmoji:
                darkGreyColor.run(bot, message, discord, msg);
                break;
            case greyEmoji:
                greyColor.run(bot, message, discord, msg);
                break;
            case whiteEmoji:
                whiteColor.run(bot, message, discord, msg);
                break;
            case darkBlueEmoji:
                darkBlueColor.run(bot, message, discord, msg);
                break;
            case blueEmoji:
                blueColor.run(bot, message, discord, msg);
                break;
            case lightBlueEmoji:
                lightBlueColor.run(bot, message, discord, msg);
                break;
            case appleBlueEmoji:
                appleBlueColor.run(bot, message, discord, msg);
                break;
            case darkGreenEmoji:
                darkGreenColor.run(bot, message, discord, msg);
                break;
            case greenEmoji:
                greenColor.run(bot, message, discord, msg);
                break;
            case lightGreenEmoji:
                lightGreenColor.run(bot, message, discord, msg);
                break;
            case yellowEmoji:
                yellowColor.run(bot, message, discord, msg);
                break;
            case lightYellowEmoji:
                lightYellowColor.run(bot, message, discord, msg);
                break;
            case orangeColor:
                orangeColor.run(bot, message, discord, msg);
                break;
            case lightRedEmoji:
                lightRedColor.run(bot, message, discord, msg);
                break;
            case redEmoji:
                redColor.run(bot, message, discord, msg);
                break;
            case purpleEmoji:
                purpleColor.run(bot, message, discord, msg);
                break;
            case pinkEmoji:
                pinkColor.run(bot, message, discord, msg);
                break;
            case '❌':
                cancelColor.run(bot, message, discord, msg);
                break;
        }
    }).catch(console.error);
};