module.exports.run = async (bot, message, discord,msg) => {
    const newColor = "Donkerblauw";
    const colorCode = "#1115A0";
    const confirmColor = require(`./confirmColor.js`);

    await confirmColor.run(bot, message, discord, newColor, colorCode, msg);
};