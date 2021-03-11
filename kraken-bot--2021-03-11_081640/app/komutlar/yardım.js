const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
 exports.run = function(cilent, message) {
if (message.channel.nsfw) return message.channel.send("Annen Evde Dimi");

let prefix =  ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("Slasher Bot Komutları")
.setTimestamp()
.addField(`**  !eğlence **`,`Eğlence Komutlarını Gösterir`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
name: 'yardım',
category: 'yardım',
description: 'Yardım Menüsü.',
usage:'.yardım',
}}