module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Oranje";
    const colorCode = "#EA7F05";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};