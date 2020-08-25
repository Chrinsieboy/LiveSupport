module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Zwart";
    const colorCode = "#000000";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};