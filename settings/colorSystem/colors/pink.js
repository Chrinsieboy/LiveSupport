module.exports.run = async (bot, message, discord) => {
    const newColor = "Roze";
    const colorCode = "#DE3EFF";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode);
};