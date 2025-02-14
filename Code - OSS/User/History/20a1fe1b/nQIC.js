// сохранение данных пользоветеля
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.btn__submit');

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const passwordOne = passwordInput.value;
    const passwordTwo = confirmPasswordInput.value;

    if (passwordOne !== passwordTwo) {
        alert('Пароли не совпадают');
        return;
    }

    console.log(name, email, passwordOne);
});



// открытие и закрытие базы данных
const openBase = document.querySelector('.btn__open');
const base = document.querySelector('.base');

openBase.addEventListener('click', () => {
    base.style.display = 'flex';
    form.style.display = 'none';
    openBase.style.display = 'none';

});


const closeBase = document.querySelector('.btn__close')

closeBase.addEventListener('click', () => {
    base.style.display = 'none';
    form.style.display = 'flex';
    openBase.style.display = 'flex';
});



