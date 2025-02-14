//передача значени в инпут

const mem = document.getElementById('mem');
const description = document.getElementById('description');
const addMem = document.querySelector('#add');

addMem.addEventListener('click', () => {
    let memValue = mem.value;
    let descriptionValue = description.value;
    console.log(memValue , descriptionValue)
    let img = document.createElement('img')
    img.src = memValue
    let p = document.createElement('p')
    p.innerText = descriptionValue
    let buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Удалить'
    let buttonLike = document.createElement('button')
    buttonLike.innerText = 'Лайк'
    let div = document.createElement('div')
    div.append(img, p, buttonDelete, buttonLike)
    document.querySelector('#mems').append(div)
});

function deleteMem() {
    let mems = document.querySelectorAll('.mem')
    for (let i = 0; i < mems.length; i++) {
        mems[i].remove()
    }
}

function like() {
    let mems = document.querySelectorAll('.mem')
    for (let i = 0; i < mems.length; i++) {
        mems[i].remove()
    }
}





