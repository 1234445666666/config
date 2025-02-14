const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('7610688304:AAH8rlwuEb-rlB8UzBwmIGADl9rcT12rmEs')

bot.start((ctx) => ctx.reply('Здравствуйте!Приветствую вас в моем боте!Здесь вы можете рассчитать проценты по вкладу.Чтобы начать введите /web'))

bot.command('menu' , ctx => {
    ctx.reply('Выберите команду: /calculate , для подсчета процентов по вкладу. Так же по команде /web можно перейти на сайт по процентвов по вкладу.')
})

bot.command('calculate', ctx => {
    ctx.reply('Эта команда позволяет вам рассчитать проценты по вкладу. Введите сумму вклада и срок в днях и процентную ставку через пробел.')
})

bot.on(message('text'), (ctx) => {
    const text = ctx.message.text;
    const parse = text.split(' ');
    if (parse.length !== 3) {
        ctx.reply('Вы забыли ввести все данные.')
        return
    }
    const sum = text.split(' ')[0];
    const days = text.split(' ')[1];
    const rate = text.split(' ')[2];
    if (isNaN(sum) || isNaN(days) || isNaN(rate)) {
        ctx.reply('Введите корректные данные.')
        return
    }
    const total = ((sum * (rate / 100)) / 365) * days;
    const result = sum + total.toFixed(2);
    ctx.reply(`Ваша сумма вклада после ${days} дней составляет ${result} рублей.`)

})




bot.launch();
//  https://1234445666666.github.io/website-calculation-of-deposit-interest/
