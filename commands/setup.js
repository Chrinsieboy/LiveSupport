const fs = require("fs");
const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    if (args.length === 0) {
        const errorEmbed = new discord.MessageEmbed()
            .setTitle("Mislukt!")
            .setDescription("Geef een Categorie ID mee.")
            .setTimestamp(Date.now())
            .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
            .setFooter("© SBDeveloper - 2020/2021");

        return message.channel.send(errorEmbed);
    }

    if (typeof data[message.guild.id] !== 'undefined' && typeof data[message.guild.id].wait !== 'undefined') {
        const errorEmbed = new discord.MessageEmbed()
            .setTitle("Mislukt!")
            .setDescription("Je hebt de bot al ingesteld.\r\nGebruik !add of !remove om kanalen toe te voegen / te verwijderen.\r\nOf gebruik !reset om opnieuw te beginnen.")
            .setTimestamp(Date.now())
            .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
            .setFooter("© SBDeveloper - 2020/2021");

        return message.channel.send(errorEmbed);
    }

    if (typeof data[message.guild.id] === 'undefined')
        data[message.guild.id] = {};

    await message.guild.channels.create("Info").then((supChannel) => {
        supChannel.setParent(args[0]);

        const loadingEmbed = new discord.MessageEmbed()
            .setTitle("Support Info:")
            .addField("⏳ Wachtend:", "0")
            .addField("💬 Support 1:", "Gesloten")
            .setTimestamp(Date.now())
            .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
            .setFooter("© SBDeveloper - 2020/2021");

        supChannel.send(loadingEmbed);

        data[supChannel.guild.id].info = supChannel.id;
    });

    await message.guild.channels.create("Support", {
        type: "voice"
    }).then((supChannel) => {
        supChannel.setParent(args[0]);

        data[supChannel.guild.id].wait = supChannel.id;
    });

    await message.guild.channels.create("Support 1", {
        type: "voice"
    }).then((supChannel) => {
        supChannel.setParent(args[0]);

        data[supChannel.guild.id].channels = [];
        data[supChannel.guild.id].channels.push(supChannel.id);
    });

    await fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
    });

    const doneEmbed = new discord.MessageEmbed()
        .setTitle("Gelukt!")
        .setDescription("Ik heb het infokanaal, het wachtkanaal en één supportkanaal aangemaakt.\r\nGebruik !add of !remove om kanalen toe te voegen / te verwijderen.")
        .setTimestamp(Date.now())
        .setColor(typeof data[message.guild.id] !== 'undefined' ? data[message.guild.id].embedColor : '')
        .setFooter("© SBDeveloper - 2020/2021");

    message.channel.send(doneEmbed);
};

module.exports.help = {
    name: "setup",
    description: "Maak de benodigde kanalen aan."
};