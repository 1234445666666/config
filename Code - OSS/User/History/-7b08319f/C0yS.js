const input = document.getElementById('input');
const button = document.getElementById('btn');
const input2 = document.getElementById('input2');

button.addEventListener('click', () => {
    if (input.value === 'input' && input2.value === 'input2') {
        alert('правильно')
    }
     else {
        alert('неправильно')
    }

})