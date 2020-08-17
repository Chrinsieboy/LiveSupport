const fs = require("fs");
const perServerInfo = JSON.parse(fs.readFileSync("././data.json"));

module.exports.run = async (wolf, message, discord, newColor, colorCode, msg) => {
    const colorChanged = new discord.MessageEmbed()
        .setTitle(`**Kleur is ingesteld op ${newColor}**`)
        .setColor(colorCode);

    msg.delete();
    message.channel.send(colorChanged);

    if (typeof perServerInfo[message.guild.id] === 'undefined')
        perServerInfo[message.guild.id] = {};

    perServerInfo[message.guild.id].embedColor = colorCode;

    fs.writeFileSync("././data.json", JSON.stringify(perServerInfo), (err) => {
        if (err) console.log(err);
    });
};