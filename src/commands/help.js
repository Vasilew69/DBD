const discord = require("discord.js");
const dateformat = require('dateformat');
const prefix = require('../config/config.json')


module.exports.run = (client, message, args) => {
    const help = new discord.MessageEmbed()
        .setColor('#b434eb#b434eb')
        .setThumbnail(message.guild.iconURL())
        .setTitle(`Help`)
        .addField(`Help - ${prefix.prefix}help`, "``This commands shows all the cmommands on the server.``")
        .addField(`8 Ball - ${prefix.prefix}8-ball {question}`, "``Ask the 8-Ball a question!``")
        .addField(`Cat - ${prefix.prefix}cat`, "``Sends a random image of a cat.``")
        .addField(`Kick - ${prefix.prefix}kick {@user}`, "``Kicks a user from the server.``")
        .addField(`Ban - ${prefix.prefix}ban {@user}`, "``Bans a user from the server.``")
        .addField(`Clear - ${prefix.prefix}clear {ammount}`, "``Clears messages from a channel.``")
    message.channel.send({embed:help})
}

module.exports.details = {
    name: 'help',
    author: 'Vasilew',
    description: 'Commands on the server',
    usage: `${prefix.prefix}help`
}