module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Blauw";
    const colorCode = "#005EA0";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};