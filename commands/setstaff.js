const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Oeps! Alleen mensen met de ADMINISTRATOR permissie kunnen dit.");

    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    if (args.length === 0) {
        const errorEmbed = new discord.MessageEmbed()
            .setTitle("Mislukt!")
            .setDescription("Geef een Rol mee.")
            .setTimestamp(Date.now())
            .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
            .setFooter("© SBDeveloper - 2020/2021");

        return message.channel.send(errorEmbed);
    }

    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if (!role) return message.channel.send("Oeps! Die rol is niet gevonden!");

    data[message.guild.id].staffID = role.id;

    await fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
    });

    const doneEmbed = new discord.MessageEmbed()
        .setTitle("Gelukt!")
        .setDescription(`De rol ${role.toString()} is nu de staffrol.`)
        .setTimestamp(Date.now())
        .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
        .setFooter("© SBDeveloper - 2020/2021");

    message.channel.send(doneEmbed);
};

module.exports.help = {
    name: "setstaff",
    description: "Stel de staffrol in."
};