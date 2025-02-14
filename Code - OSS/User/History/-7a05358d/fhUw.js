const Input = document.querySelector('.main__input');

const btn = document.querySelector('.main__btn');

const btn2 = document.querySelector('.main__btn2');

const list = document.querySelector('.main__list');

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    if (Input.value === '') {
        alert('введите текст');
        return;
    }
    li.textContent = Input.value;
    list.appendChild(li);
    Input.value = '';
});

btn2.addEventListener('click', () => {
    list.innerHTML = '';
})