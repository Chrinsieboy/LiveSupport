module.exports.run = async (bot, message, discord,msg) => {
    const newColor = "Groen";
    const colorCode = "#3BBF1E";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode,msg);
};