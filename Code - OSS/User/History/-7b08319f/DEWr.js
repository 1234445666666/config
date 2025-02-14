const input = document.getElementById('input');
const button = document.getElementById('btn');
const input2 = document.getElementById('input2');
const passwordOpen = document.querySelector('.password__control');

button.addEventListener('click', () => {
    if (input.value === input2.value) {
        alert('правильно')
    }
     else {
        alert('неправильно')
    }

})

passwordOpen.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text';
        passwordOpen.textContent = 'скрыть пароль';
    } else {
        input.type = 'password';
        passwordOpen.textContent = 'показать пароль';
    }
})