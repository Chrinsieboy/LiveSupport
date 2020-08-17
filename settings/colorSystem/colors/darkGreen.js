module.exports.run = async (bot, message, discord,msg) => {
    const newColor = "Donkergroen";
    const colorCode = "#127400";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};