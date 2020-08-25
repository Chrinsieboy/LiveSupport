module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Appelblauwzeegroen";
    const colorCode = "#00AAB6";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};