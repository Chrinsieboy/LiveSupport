const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const colorSystem = require(`../settings/colorSystem/loading/loadingEmojis.js`);
    await colorSystem.run(client, message, args, discord);
};

module.exports.help = {
    name: "setcolor",
    description: "Stel de embed kleur in."
};