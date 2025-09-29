// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const TOKEN = process.env.DISCORD_TOKEN; 
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    const username = message.author.username;
    const trigger = /is\s*this\s*true/i;
    if (message.content.toLowerCase().includes(trigger)) {
      let roll = Math.floor(Math.random() * 10000) + 1;
      if (roll == 1) {
        message.reply("# 〓𝗜𝗗𝗞 𝗟𝗠𝗔𝗢〓 ");
      } else if (roll % 2 == 1) {
        message.reply("# 〓𝗬𝗘𝗦〓 ");
      } else {
        message.reply("# 〓𝗡𝗢〓 ");
      }
    }
});

client.login(TOKEN);

