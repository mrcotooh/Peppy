const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()  
    .setColor("BLUE") /*criado por nãoexisto*/
    .setDescription(` `)
    .setTimestamp()
    .setThumbnail('https://imgur.com/TPZEG8B.png')
    .setFooter(`Enviado por ${message.author.username}`)
    .addFields(
        {
            name: '🤖 __Eu sou:__',
            value: `\`${client.user.tag}\``,
            inline: false
        },
        {
            name: '💢 __Servidores:__',
            value: `\`${client.guilds.cache.size}/100\``,
            inline: false
        },
        {
            name: '🍀 __Canais:__',
            value: `\`${client.channels.cache.size}\``,
            inline: false
        },
        {
            name: '💁 __Usuários:__',
            value: `\`${client.users.cache.size}\``,
            inline: false
        },
        {
            name: '🏓 __Meu ping:__',
            value: `\`${Math.round(client.ws.ping)}\` ms`,
            inline: false
        },
        {
            name: '🛠️ __Criador:__',
            value: '<@693597664918503535>',
            inline: false
        },
        {
            name: '🔗  __*Meu servidor:*__',
            value: 'LINK DO SERVIDOR',
            inline: false
        },
    )
    message.channel.send(`${message.author}`, embed);
} /*código criado por nãoexisto#0001*/ 