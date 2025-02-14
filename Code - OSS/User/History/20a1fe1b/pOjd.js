// сохранение данных пользоветеля
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const passwordOne = passwordInput.value;
    const passwordTwo = confirmPasswordInput.value;

    if (passwordOne !== passwordTwo) {
        alert('Пароли не совпадают');
        return;
    }


    console.log(name, email, passwordOne, passwordTwo);
});



// открытие и закрытие базы данных
const openBase = document.querySelector('button');
const base = document.querySelector('.base');
openBase.addEventListener('click', () => {
    base.style.display = 'flex';
    openBase.style.display = 'none';
});




