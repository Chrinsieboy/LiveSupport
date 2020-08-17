const discord = require("discord.js");

const client = new discord.Client();
client.commands = new discord.Collection();
const fs = require("fs");

const botconfig = require("./config.json");

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;

        let props = require(`./commands/${file}`);

        let commandName = file.split(".")[0];
        console.log(`Loading the command ${commandName}...`);

        client.commands.set(commandName, props);
        delete require.cache[require.resolve(`./commands/${file}`)];
    });
});

client.on("ready", () => {
    client.generateInvite(["ADMINISTRATOR"]).then(invite => {
        console.log(`Invite: ${invite}`);
    }).catch(console.error);

    console.log("LiveSupport bot is klaar voor gebruik!");
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;
    
    let prefix = "!";
    if (!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let command = client.commands.get(cmd.slice(prefix.length));
    if (command) command.run(client, message, args);
});

client.login(botconfig.token);