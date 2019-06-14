const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589057783744167958")
setInterval(function() {
channel.send(`badie badie badie badie badie`);
}, 30)
})

client.login(process.env.BOT_TOKEN);