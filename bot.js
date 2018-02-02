var Discord = require('discord.js');
var auth = require('./auth.json');
var client = new Discord.Client();
client.on('ready',()=>{
    console.log('Logged in as '+client.user.tag);
});

client.on('message', msg=>{
    if (msg.content ==='!TIDUS' || msg.content ==='!tidus'|| msg.content ==='!Tidus'){
        msg.channel.send('HA HA HA HA');
    }
});

client.login(auth.token);