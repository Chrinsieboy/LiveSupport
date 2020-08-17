module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Wit";
    const colorCode = "#ffffff";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};