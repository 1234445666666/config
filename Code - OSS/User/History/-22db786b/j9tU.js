//передача значени в инпут

const mem = document.getElementById('mem');
const description = document.getElementById('description');
const addMem = document.querySelector('#add');

addMem.addEventListener('click', () => {
    let memValue = mem.value;
    let descriptionValue = description.value;
    console.log(memValue , descriptionValue)
    let img = document.createElement('img')
    img.scr = memValue
    



});



