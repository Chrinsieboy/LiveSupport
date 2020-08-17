module.exports.run = async (bot, message, discord, msg) => {
    const newColor = "Lichtblauw";
    const colorCode = "#26A6FF";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};