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
    const password1 = passwordInput.value;


    console.log(name, email, password1);
});





