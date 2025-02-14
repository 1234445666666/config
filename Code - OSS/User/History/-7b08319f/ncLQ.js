//проверка паролей
const userCheckpassword = document.getElementById('checkPassword');
const button = document.getElementById('btn');
const userOpenPassword = document.getElementById('enterPassword');

button.addEventListener('click', () => {
    if (userOpenPassword.value === userCheckpassword.value) {
        alert('правильно')
    }
    else {
        alert('неправильно')
    }
    
})

//показа пароля
const passwordOpen = document.querySelector('.password__control');

passwordOpen.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text';
        passwordOpen.textContent = 'скрыть пароль';
    } else {
        input.type = 'password';
        passwordOpen.textContent = 'показать пароль';
    }
})