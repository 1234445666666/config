export function toDo() {
    const form = document.querySelector('.form');
    const input = document.querySelector('.input');
    const list = document.querySelector('.list');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerHTML = input.value;
        list.append(item);
        input.value = '';
    });
}