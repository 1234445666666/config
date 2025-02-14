//проверка паролей
const userOpenPassword = document.getElementById('enterPassword');
const button = document.getElementById('btn');
const userOpenPassword = document.getElementById('input2');

button.addEventListener('click', () => {
    if (userOpenPassword.value === input2.value) {
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