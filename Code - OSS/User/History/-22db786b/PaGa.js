//добавление картинки
const inputImg = document.querySelector('#input__img')
const inputText = document.querySelector('#input__text')
const addBtn = document.querySelector('#add__to__do')

addBtn.addEventListener('click' , () => {

    

})

createCard = (img , text) => {
    let memImg = inputImg.value;
    let memText = inputText.value;

    let todoMem = document.createElement('div')
    todoMem.className = 'to__do__mem'

    todoMem.insertAdjacentElement('beforeend' , 
        `
        <span class = 'like__card'></span>
        <span class = 'img__card'>${img}</span>
        <span class = 'text__card'>${img}</span>

        
        `
    )



}