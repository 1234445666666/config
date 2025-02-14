const {Telegraf} = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('7610688304:AAH8rlwuEb-rlB8UzBwmIGADl9rcT12rmEs')

bot.start((ctx) => ctx.reply('Здравствуйте!Приветствую вас в моем боте!Здесь вы можете рассчитать проценты по вкладу.Чтобы начать введите /calculate'))

bot.command('calculate', ctx => {
    ctx.reply('Эта команда позволяет вам рассчитать проценты по вкладу. Введите сумму вклада и срок в днях и процентную ставку.')
})

bot.on(message('text' ), (ctx) => {
    const text = ctx.message.text;
    const sum = text.split(' ')[0];
    const days = text.split(' ')[1];
    const percent = (sum / 100) * 5 * days;
    const result = sum + percent;
    ctx.reply(`Ваша сумма вклада после ${days} дней составляет ${result} рублей.`)
})





bot.launch();
