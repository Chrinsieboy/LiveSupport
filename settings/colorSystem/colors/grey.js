module.exports.run = async (bot, message, discord,msg) => {
    const newColor = "Grijs";
    const colorCode = "#767676";
    const confirmColor = require(`./confirmColor.js`);
    
    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};