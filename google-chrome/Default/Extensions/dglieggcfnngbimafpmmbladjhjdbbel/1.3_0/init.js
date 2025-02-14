// Начиная с версии 1.1 плагин использует popup окна на сайте, и ему нужен доступ к window
// Поэтому пришлось прибегнуть к инъекции скрипта прямо в код сайта

function injectScript(file) {
    let th = document.body;
    let s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

try {
    injectScript(chrome.runtime.getURL('/script.js'));
} catch (e) {
    try {
        injectScript(chrome.extension.getURL('/script.js'));
    } catch (e) {
        injectScript('chrome-extension://dglieggcfnngbimafpmmbladjhjdbbel/script.js');
    }
}