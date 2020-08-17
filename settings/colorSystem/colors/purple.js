module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Paars";
    const colorCode = "#9A00BA";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};