const input = document.getElementById('input');
const button = document.getElementById('btn');
const input2 = document.getElementById('input2');

button.addEventListener('click', () => {
    if (input.value === input2.value) {
        alert('правильно')
    }
     else {
        alert('неправильно')
    }

})