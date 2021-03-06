const discord = require("discord.js");

const client = new discord.Client();
client.commands = new discord.Collection();
const fs = require("fs");

const botconfig = require("./config.json");

const googleTTS = require('google-tts-api');

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

client.on("voiceStateUpdate", (oldState, newState) => {
    if (oldState == null && newState != null) {
        checkJoin(newState);
    } else if (oldState != null && newState != null) {
        checkJoin(newState);
        checkLeft(oldState);
    } else if (oldState != null && newState == null) {
        checkLeft(oldState);
    }
});

function checkJoin(state) {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    if (state.channelID !== data[state.guild.id].wait) return;

    if (state.guild.me.voice.channel) return;

    const waitingChannel = client.channels.cache.get(data[state.guild.id].wait);

    waitingChannel.join().then((connection) => {
        play(connection, 0);
        setInterval(function() {
            playWachtend(connection);
        }, 30000);
    });
}

function checkLeft(state) {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    if (state.channelID !== data[state.guild.id].wait) return;

    if (state.channel.members.size - 1 === 0) {
        state.channel.leave();
    }
}

client.on("voiceStateUpdate", (oldState, newState) => {
    if (oldState != null && newState == null) {
        //Left channel
        updateInfo(oldState.guild.id);
    } else {
        //Joined channel
        updateInfo(newState.guild.id);
    }
});

function updateInfo(guildID) {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    const channel = client.channels.cache.get(data[guildID].info);

    const waitingChannel = client.channels.cache.get(data[guildID].wait);

    channel.messages.fetch({limit:1}).then(async (messages) => {
        const message = messages.first();

        const embed = new discord.MessageEmbed()
            .setTitle("Support Info:")
            .addField("⏳ Wachtend:", waitingChannel.members.size > 0 ? waitingChannel.members.size - 1 : 0)
            .setTimestamp(Date.now())
            .setColor(typeof data[guildID] !== 'undefined' ? data[guildID].embedColor : '')
            .setFooter("© SBDeveloper - 2020/2021");

        let id = 1;
        await data[guildID].channels.forEach((supportChannelID) => {
            const supportChannel = client.channels.cache.get(supportChannelID);

            let status = "Gesloten";
            let bezet = false;
            supportChannel.members.forEach(channelMember => {
                if (channelMember.roles.cache.find(role => role.id === data[guildID].staffID)) {
                    if (!bezet) status = "Vrij";
                } else {
                    bezet = true;
                    status = "Bezet";
                }
            });

            embed.addField(`💬 Support ${id}`, status);

            id++;
        });

        await message.edit(embed);
    }).catch(console.error);
}

let musicDispatcher;
let currentSeek;

let current;
function play(connection, seek) {
    if (seek == 0) {
        current = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }

    currentSeek = seek;

    musicDispatcher = connection.play("opus" + current + ".mp3", { seek: seek, volume: 0.5 })
        .on("finish", () => {
            play(connection, 0);
        }).on("error", error => console.error(error));
}

function playWachtend(connection) {
    let wachtend = connection.channel.members.size - 1;

    let tekst;
    if (wachtend == 1) {
        tekst = "Er is op dit moment 1 wachtende. Even geduld aub.";
    } else {
        tekst = "Er zijn op dit moment " + wachtend + " wachtenden. Even geduld aub.";
    }

    googleTTS(tekst, "nl", 1, 10000).then(function(url) {
        let streamTime = musicDispatcher.streamTime;
        let streamTimeSec = Number(((streamTime % 60000) / 1000)) + Number(currentSeek);

        connection.play(url).on("finish", function() {
            play(connection, streamTimeSec);
        }).on("error", error => console.error(error));
    }).catch(function (err) {
        console.error(err.stack);
    });
}

client.login(botconfig.token).catch(console.error);
