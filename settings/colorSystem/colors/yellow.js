module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Geel";
    const colorCode = "#FFC001";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, bot, discord, newColor, colorCode, msg);
};