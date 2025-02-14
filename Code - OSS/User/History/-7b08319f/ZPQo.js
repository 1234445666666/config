//проверка логинов и паролей
const userCheckpassword = document.getElementById('checkPassword');
const button = document.getElementById('btn');
const userOpenPassword = document.getElementById('enterPassword');
const userOpenLogin = document.getElementById('enterLogin');
const btnRegistration = document.querySelector('.registration__btn');

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
const passwordOpenUser = document.querySelector('.password__control');

passwordOpenUser.addEventListener('click', () => {
    if (userCheckpassword.type === 'password') {
        userCheckpassword.type = 'text';
        passwordOpenUser.textContent = 'скрыть пароль';
    } else {
        userCheckpassword.type = 'password';
        passwordOpenUser.textContent = 'показать пароль';
    }
})

btnRegistration.addEventListener('click', () => {
    document.querySelector('.registration').style.display = 'none';
    document.querySelector('.password').style.display = 'flex';
})



