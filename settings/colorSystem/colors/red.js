module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Rood";
    const colorCode = "#F44336";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};