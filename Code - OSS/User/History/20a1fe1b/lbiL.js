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
    const password = passwordInput.value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log(name, email, password, confirmPassword);
});





