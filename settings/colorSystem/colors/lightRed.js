module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Lichtrood";
    const colorCode = "#BA0D00";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};