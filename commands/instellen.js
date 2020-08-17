const fs = require("fs");
const discord = require("discord.js");
const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

module.exports.run = async (client, message, args) => {
    if (args.length == 0) {
        return message.channel.send("Oeps! Gebruik !instellen <Categorie ID>");
    }

    message.guild.channels.create("Support", {type:"voice"}).then(supChannel => {
        supChannel.setParent(args[0]);

        data[supChannel.guild.id].wait = supChannel.id;
    });

    message.guild.channels.create("Support 1", {type:"voice"}).then(supChannel => {
        supChannel.setParent(args[0]);

        data[supChannel.guild.id].channels = {"1" : supChannel.id};
    });

    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
    });

    const doneEmbed = new discord.MessageEmbed()
        .setTitle("")

    message.channel.send("Ik heb 1 wachtkanaal en 1 supportkanaal aangemaakt. Voeg meer supportkanalen toe met !toevoegen")
};

module.exports.help = {
    name: "instellen",
    description: "Maak de benodigde kanalen aan."
};