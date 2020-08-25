module.exports.run = async (bot, message, discord,msg) => {
    const newColor = "Donkergrijs";
    const colorCode = "#4C4C4C";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};