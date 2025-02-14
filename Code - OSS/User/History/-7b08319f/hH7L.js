const input = document.getElementById('input');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    if (input.value === 'тимур сосал') {
        alert('правильно')
    }
     else {
        alert('неправильно')
    }

})