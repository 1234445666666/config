//проверка логинов и паролей
const userCheckpassword = document.getElementById('checkPassword');
const button = document.getElementById('btn');
const userOpenPassword = document.getElementById('enterPassword');
const userOpenLogin = document.getElementById('enterLogin');
const passwordOpen = document.querySelector('.password__control');
const btnRegistration = document.querySelector('.registration');

button.addEventListener('click', () => {
    if (userOpenPassword.value === userCheckpassword.value && userOpenLogin.value === userCheckpassword.value) {
        alert('правильно')
    }
    else {
        alert('неправильно')
    }
    
})

//скрытие поля регистации

//показа пароля
const passwordOpen = document.querySelector('.password__control');

passwordOpen.addEventListener('click', () => {
    if (userCheckpassword.type === 'password') {
        userCheckpassword.type = 'text';
        passwordOpen.textContent = 'скрыть пароль';
    } else {
        userCheckpassword.type = 'password';
        passwordOpen.textContent = 'показать пароль';
    }
})

btnRegistration.addEventListener('click', () => {
    document.querySelector('.registration').style.display = 'block';
    document.querySelector('.password').style.display = 'flex';
})