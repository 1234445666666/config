const Input = document.querySelector('.main__input');

const btnAdd = document.querySelector('.main__btn');

const btnRemoveONE = document.querySelector('.main__btn2');

const btnRemoveALL = document.querySelector('.main__btn3');

const list = document.querySelector('.main__list');

btnAdd.addEventListener('click', () => {
    const li = document.createElement('');
    li.textContent = Input.value;
    list.nodeName.appendChild(li);
    Input.value = '';
});

btnRemoveONE.addEventListener('click', () => {
    list.removeChild(list.lastElementChild);
});

btnRemoveALL.addEventListener('click', () =>
    list.innerHTML = ''
);