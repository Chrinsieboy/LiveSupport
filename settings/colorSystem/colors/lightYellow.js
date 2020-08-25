module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Lightgeel";
    const colorCode = "#FFF300";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};