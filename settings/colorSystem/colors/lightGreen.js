module.exports.run = async (bot, message, discord,msg) => {
    const newColor = "Lichtgroen";
    const colorCode = "#9CFF20";
    const confirmColor = require(`./confirmColor.js`);

    await confirmColor.run(bot, message, discord, newColor, colorCode,msg);
};