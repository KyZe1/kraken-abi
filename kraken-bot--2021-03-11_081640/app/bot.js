const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const moment = require('moment');
const chalk = require('chalk')

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("KYZE")

client.user.setActivity(`Slasher <3`, {
type: "STREAMING",
url: "https://www.twitch.tv/kyzefnx"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login(ayarlar.token)