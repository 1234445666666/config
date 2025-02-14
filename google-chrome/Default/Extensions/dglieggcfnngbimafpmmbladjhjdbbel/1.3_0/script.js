//
// Copyright Ilsur Gilmutdinov 2020-2022
// me@ilsur.dev
// https://ilsur.dev
// https://418team.com
//

(function () {
    checkPluginVersion();
    addButtons();
    analytics();
})();

function checkPluginVersion() {
    // Плагин сохраняет в LocalStorage свою версию.
    // Если версия устарела или не была указана ранее,
    // то на экран выводится модальное окно со списком изменений в новой версии

    const EXTENSION_CURRENT_VERSION = '1.3';
    const EXTENSION_CHANGELOG = `
        <h2>Список изменений:</h2>
        <ul style="font: 18px robotomedium,robotomedium-2,sans-serif">
        <li style="margin: 6px 0">1. Повышена стабильность работы плагина</li>
        <li style="margin: 6px 0">2. Добавлена кнопка для скрытия интерфейса плагина (пригодится если нужно сделать скриншот страницы)</li>
        <li style="margin: 6px 0">3. Добавлена кнопка с инструкцией по использованию плагина</li>
        </ul><br/>
        
        Подписывайтесь на наш Telegram канал <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/answers_resh">t.me/answers_resh</a><br/>
        Там выкладываются новости и информация об обновлениях плагина
    `;

    if (
        !window.localStorage.reshPlugin_version ||
        window.localStorage.reshPlugin_version !== EXTENSION_CURRENT_VERSION
    ) {
        sendAnalytics('updated', `${window.localStorage.reshPlugin_version} > ${EXTENSION_CURRENT_VERSION}`);
        window.localStorage.reshPlugin_version = EXTENSION_CURRENT_VERSION;
        window.Swal.fire({
            title: `Плагин "Просмотр ответов РЭШ"\nобновлён до версии ${EXTENSION_CURRENT_VERSION}`,
            html: EXTENSION_CHANGELOG
        });
    }
}

function notifyIncorrectAnswer() {
    window.Swal.fire({
        icon: 'error',
        title: `Внимание`,
        showCancelButton: true,
        cancelButtonText: `Закрыть`,
        confirmButtonText: `Поддержать плагин`,
        html: `
            <b>На РЭШ есть проблемы с некоторыми заданиями</b><br/><br/>
            Если при нажатии на кнопку <b>«Показать правильный ответ»</b> ничего <b>не происходит</b>, либо плагин дал "неверный" ответ, значит
            <b>авторы задания</b> вообще <b>не указали</b> какой здесь <b>правильный ответ</b>.<br/>Это ошибка самого сайта.<br/><br/>
            Сейчас мы <b>думаем</b>, как можно получить "5" в таких случаях. Скорее всего, <b>в новых версиях плагина появится такая возможность</b>.
            А пока, можете <b>поддержать плагин</b>, чтобы ускорить выход новых версий.
            `
    }).then(result => {
        if (result.value === true) {
            notifyDonate();
        }
    });
    sendAnalytics('button_incorrect');
}

function notifyDonate() {
    window.Swal.fire({
        title: `Поддержать плагин`,
        confirmButtonText: `Закрыть`,
        html: `
            <b>Плагин "Ответы РЭШ" распространяется бесплатно. В отличие от конкурентов, я безвозмездно 
            помогаю школьникам. Но если вы хотите, то можете поддержать автора и плагин. Мне будет очень приятно</b><br/>
            <h2>1 Способ</h2>
            Вы можете <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://chrome.google.com/webstore/detail/просмотр-ответов-на-рэш/dglieggcfnngbimafpmmbladjhjdbbel">оставить отзыв о плагине</a>
            <h2>2 Способ</h2>
            Расскажите о плагине друзьям и одноклассникам
            <h2>3 Способ</h2>
            Расскажите о плагине в тиктоке с использованием хештегов #рэш #ответы #лайфхак
            <h2>4 Способ</h2>
            Вступите в наш Telegram канал <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/answers_resh">t.me/answers_resh</a><br/>
            Там выкладываются новости и информация об обновлениях плагина
            <h2>5 Способ</h2>
            <p style="font: 18px robotomedium,robotomedium-2,sans-serif;">Плагин предоставляется абсолютно бесплатно и никогда не станет платным. Это позиция автора. 
            Я тоже школьник, и сделал этот плагин, чтобы облегчить жизнь другим школьникам на дистанте. 
            И я буду безумно рад добровольным донатам со стороны пользователей :)</p>
            <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://339910.selcdn.ru/resh-donate/">Пожертвовать пару рублей на развитие плагина</a><br/>
            `
    });
    sendAnalytics('button_donate');
}

function notifyInstruction() {
    window.Swal.fire({
        title: `Инструкция`,
        confirmButtonText: `Закрыть`,
        html: `
            <h2 style="text-align: left"><b>Как узнать ответы на задания</b></h2>
            <ol style="text-align: left">
                <li style="margin: 6px 0">Зайдите на страницу урока</li>
                <li style="margin: 6px 0">Перейдите в тренировочные или контрольные задания</li>
                <li style="margin: 6px 0">Нажмите кнопку "Показать правильный ответ". Правильные ответы сами подставятся</li>
                <li style="margin: 6px 0">Переходите к следующему заданию</li>
                <li style="margin: 6px 0">Таким же образом пройдите по всем заданиям и проставьте правильные ответы с помощью кнопки "Показать правильный ответ"</li>
                <li style="margin: 6px 0">Завершите урок</li>
            </ol>
            <h2 style="text-align: left"><b>Не работает кнопка для показа правильного ответа</b></h2>
            <p style="text-align: left">Иногда кнопка "Показать правильный ответ" может не срабатывать. На то есть две причины:</p>
            <ol style="text-align: left">
                <li style="margin: 6px 0">Сайт или интернет тормозит. Нужно подождать несколько секунд</li>
                <li style="margin: 6px 0">Если спустя время ответ не подставился, значит это проблема сайта. В некоторых заданиях администраторы РЭШ не заполняют правильные ответы, и эти задания невозможно решить. Вот на таком кривом сайте приходится нам заниматься на дистанте...</li>
            </ol>
            <h2 style="text-align: left"><b>Меня не спалят если я буду пользоваться плагином?</b></h2>
            <p style="text-align: left">
                <b>Нет, вас не спалят. Всё абсолютно безопасно.</b> 
                Но если вы делаете скриншот страницы с заданием, чтобы отправить его учителю, 
                то сперва вам нужно скрыть кнопку "Показать правильный ответ", чтобы её не заметил учитель. 
                Для этого нажмите на кнопку "Скрыть интерфейс плагина" и после этого сайт станет таким же, как и без плагина.
                После этого можете спокойно фотографировать страницу. А чтобы снова включить плагин, просто перезагрузите страницу
            </p>
            `
    });
    sendAnalytics('button_instruction');
}

function notifyHide() {
    window.Swal.fire({
        title: `Скрыть интерфейс`,
        showCancelButton: true,
        cancelButtonText: `Отмена`,
        confirmButtonText: `Скрыть интерфейс`,
        html: `
            <p>
                Если вы завершили все задания и вам нужно отправить скриншот учителю, воспользуйтесь скрытием интерфейса.<br/><br/>
                Все кнопки плагина будут скрыты, и вы сможете спокойно сделать скриншот. Таким образом учитель не спалит, что вы пользуетесь этим плагином<br/><br/>
                <b>Чтобы снова включить плагин, необходимо будет перезагрузить страницу</b>
            </p>
            `
    }).then(result => {
        if (result.value === true) {
            document.getElementById('reshAnswers__block1').style.display = 'none';
            document.getElementById('reshAnswers__button1').style.display = 'none';
        }
    });
    sendAnalytics('button_hide_ui');
}

function notifyFeedback() {
    window.Swal.fire({
        title: `Поддержка`,
        confirmButtonText: `Закрыть`,
        html: `
                <h2>Telegram чат с обсуждением плагина</h2>
                При возникновении проблем с плагином, рекомендуется писать в этот чат:<br/>
                <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/answers_resh_chat">t.me/answers_resh_chat</a><br/>
                <h2>Telegram канал плагина</h2>
                Здесь выкладываются новости и обновления плагина:<br/>
                <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/answers_resh">t.me/answers_resh</a><br/>
                <h2>Разработчик</h2>
                <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/ilsur_dev">t.me/ilsur_dev</a><br/>
            `
    });
    sendAnalytics('button_feedback');
}

function notifyTiktok() {
    window.Swal.fire({
        title: `Конкурс TikTok`,
        confirmButtonText: `Закрыть`,
        html: `
            <h2 style="text-align: left"><b>Призы</b></h2>
            <ul style="text-align: left">
                <li style="margin: 6px 0">3 победителя, каждый из которых получит 500 рублей</li>
            </ul>
            <h2 style="text-align: left"><b>Условия</b></h2>
            <ol style="text-align: left">
                <li style="margin: 6px 0"><b>С 27 января до 1 марта 2022г</b>. снимите TikTok и расскажите о данном плагине, для чего он нужен, как его скачать и как им пользоваться</li>
                <li style="margin: 6px 0">В описании должны быть хештеги <b>#рэш #ответы #лайфхак</b> а также можете дополнительно добавить свои хештеги</li>
                <li style="margin: 6px 0">Опубликуйте видео и отправьте ссылку в Telegram <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/ilsur_dev">t.me/ilsur_dev</a><br/></li>
                <li style="margin: 6px 0"><b>4 марта 2022г. 3 автора самых популярных и качественных видео получат по 500 рублей</b></li>
                <li style="margin: 6px 0">При подведении итогов будут учитываться <b>кол-во просмотров, лайков, а также качество видео и подача материала</b></li>
                <li style="margin: 6px 0">Все новости о конкурсе будут публиковаться в нашем Telegram канале <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/answers_resh">t.me/answers_resh</a><br/></li>
            </ol>
            <h2 style="text-align: left"><b>Для популярных блогеров</b></h2>
            <ul style="text-align: left">
                <li style="margin: 6px 0">
                Если у вас много подписчиков, мы можем обсудить возможность сотрудничества и размещения рекламы. 
                При сотрудничестве вы не сможете участвовать в конкурсе, так как будет индивидуальная оплата. 
                Для обсуждения вариантов сотрудничества свяжитесь с разработчиком
                <a target="_blank" style="font: 18px robotomedium,robotomedium-2,sans-serif; color: #0066ff;" href="https://t.me/ilsur_dev"> t.me/ilsur_dev</a>
                </li>
            </ul>
            `
    });
    sendAnalytics('button_tiktok');
}

function sendAnalytics(action, content) {
    try {
        fetch('https://resh.ilsur.dev/m',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action, content, v: '1.3',
                    _rt: localStorage.reshPlugin_rt,
                    url: window.location.href
                })
            })
            .then(r => r.json())
            .then(r => {
                try {
                    if (r._rt) localStorage.reshPlugin_rt = r._rt;
                    if (r.uid) localStorage.reshPlugin_uid = r.uid;
                } catch (e) {
                }
            })
            .catch(_ => {
            });
    } catch (e) {
    }
}

function analytics() {
    // Аналитика использования плагина. Текущая страница, имя и школа
    sendAnalytics('visit_page', window.location.href || null);
    try {
        fetch('https://resh.edu.ru/office/user/pupil')
            .then(r => r.text())
            .then(r => {
                const doc = new DOMParser().parseFromString(r, 'text/html');
                sendAnalytics('name', doc.getElementsByClassName('lk-user-block')[0].textContent);
                sendAnalytics('school', doc.getElementsByClassName('lk-user-details')[0].textContent);
            })
            .catch(e => {
            });
    } catch (e) {

    }
}

function showAnswer() {
    $(`.scene--active .js-test-item`).trigger('test-show-answer');
}

function addButtons() {
    let buttonsBlocks = document.getElementsByClassName('js-test-container');
    for (let block in buttonsBlocks) createButton(buttonsBlocks[block]);

    let helpButtonsBlock = document.getElementsByClassName('send-lesson-error');
    for (let block in helpButtonsBlock) createHelpButtons(helpButtonsBlock[block]);
}

function createButton(block) {
    try {
        let line = block.getElementsByClassName('test__buttons-line')[0];

        let showAnswers = document.createElement('a');
        showAnswers.className = 'lk-form-submit js-show-answer';
        showAnswers.dataset.intro = 'Показать правильный ответ';
        showAnswers.textContent = 'Показать правильный ответ';
        showAnswers.style = 'background: #FFF; border: 3px solid #32d7c0; color: #1b7165;';
        showAnswers.addEventListener('click', () => showAnswer());
        showAnswers.id = 'reshAnswers__button1';
        line.appendChild(showAnswers);
        console.log('Кнопка показа ответа добавлена');

        block.appendChild(line);
    } catch (e) {

    }
}

function createHelpButtons(block) {
    try {
        block.innerHTML = '';
        block.id = 'reshAnswers__block1';

        let menu = document.createElement('div');
        menu.style = 'border: 3px solid #32d7c0; padding: 0 15px 18px 15px; margin-bottom: 20px;';

        let buttons = [
            {title: '🔥Как пользоваться плагином 🔥', target: notifyInstruction, color: '#1ea996'},
            {title: '🔥Конкурс TikTok 🔥', target: notifyTiktok, color: '#1ea996'},
            {title: 'Скрыть интерфейс (для скриншота)', target: notifyHide, color: '#1ea996'},
            {title: 'Поддержать плагин', target: notifyDonate, color: '#1ea996'},
            {title: 'Связаться с разработчиком', target: notifyFeedback, color: '#1ea996'},
            {title: 'Что делать, если сайт не засчитал ответ плагина', target: notifyIncorrectAnswer, color: '#f17c38'}
        ];

        buttons.forEach((item) => {
            addHelpButton(menu, item);
        });

        let copyright = document.createElement('a');
        copyright.onclick = () => sendAnalytics('button_copyright');
        copyright.textContent = 'Разработчик: Ильсур Гильмутдинов © 2020-2022';
        copyright.href = 'https://t.me/ilsur_dev';
        copyright.target = '_blank';

        block.appendChild(menu);
        block.appendChild(copyright);
    } catch (e) {

    }
}

function addHelpButton(block, button) {
    let a = document.createElement('a');

    a.className = 'resh-plugin-button';
    a.textContent = button.title;
    a.style = `color: ${button.color}; font: 16px robotomedium,robotomedium-2,sans-serif; cursor: pointer;`;
    a.addEventListener('click', () => button.target());

    block.appendChild(document.createElement('br'));
    block.appendChild(a);
    block.appendChild(document.createElement('br'));
}