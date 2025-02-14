const Input = document.querySelector('.main__input');

const btnAdd = document.querySelector('.main__btn');

const btnRemove = document.querySelector('.main__btn2');

const list = document.querySelector('.main__list');

btnAdd.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = Input.value;
    list.appendChild(li);
    Input.value = '';
});

btnRemove.addEventListener('click', () => {
    list.removeChild(list.lastElementChild);
    
})