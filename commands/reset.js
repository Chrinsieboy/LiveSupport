const fs = require("fs");
const discord = require("discord.js");

module.exports.run = async (client, message) => {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    if (typeof data[message.guild.id] === 'undefined') {
        const errorEmbed = new discord.MessageEmbed()
            .setTitle("Mislukt!")
            .setDescription("De bot is nog niet ingesteld.\r\nGebruik !setup.")
            .setTimestamp(Date.now())
            .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
            .setFooter("© SBDeveloper - 2020/2021");

        return message.channel.send(errorEmbed);
    }

    delete data[message.guild.id];

    await fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
    });

    const errorEmbed = new discord.MessageEmbed()
        .setTitle("Gelukt!")
        .setDescription("De bot is gereset.")
        .setTimestamp(Date.now())
        .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
        .setFooter("© SBDeveloper - 2020/2021");

    return message.channel.send(errorEmbed);
};

module.exports.help = {
    name: "setup",
    description: "Maak de benodigde kanalen aan."
};