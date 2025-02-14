const {Telegraf} = require('telegraf')

const bot = new Telegraf('7610688304:AAH8rlwuEb-rlB8UzBwmIGADl9rcT12rmEs')

bot.start((ctx) => ctx.reply('Hello!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('text', (ctx) => ctx.reply('Received text message'))
bot.launch()