// Import config.json
const fs = require('fs');
const { prefix, token } = require('./config.json');
// Import DiscordJS and create a new client
const Discord = require('discord.js');
const Bot = require('./bot.js');
const client = new Discord.Client();
const rocketBot = new Bot(client, token);

rocketBot.login();
// Happens on every message event
rocketBot.client.on('message', message => {
    // Log every message - Very basic
    console.log(message.content);
    // Do some message checks
    if (message.content.toString().toLowerCase().startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.toString().toLowerCase().startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server Name: ${message.guild.name}\nOwner: ${message.guild.owner}\nTotal Members: ${message.guild.memberCount}
Created: ${message.guild.createdAt}\nID: ${message.guild.id}\nRegion: ${message.guild.region.toString().toUpperCase()}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}\nCreated: ${message.author.createdAt}
Tag: ${message.author.tag}`);
    }
});
