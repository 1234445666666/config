const input = document.getElementById('input');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    if (input.value === '123') {
        alert('правильно')
    }
     else {
        alert('неправильно')
    }

})