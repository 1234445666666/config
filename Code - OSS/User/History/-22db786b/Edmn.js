// //добавление картинки
// const inputImg = document.querySelector('#input__img')
// const inputText = document.querySelector('#input__text')
// const addBtn = document.querySelector('#add__to__do')
// const cardsMem = document.querySelectorAll('.cards')

// addBtn.addEventListener('click' , () => {
//     if (inputImg.value.trim !=='' && inputText.value.trim !==''){
//         createCard(inputImg.value);
//         createCard(inputText.value);

//         inputImg.value = '';
//         inputText.value = '';
//     }
//     else {
//         alert('Введите задачу')
//     }
// })

// createCard = (img , text) => {
//     let memImg = inputImg.value;
//     let memText = inputText.value;

//     let todoMem = document.createElement('div')
//     todoMem.className = 'to__do__mem';

//     todoMem.insertAdjacentElement('beforeend' , 
//         `
//         <span class ='like__card'></span>
//         <span class ='img__card' style="background-image: url(${img});></span>
//         <span class ='text__card'>${text}</span>
//         <span class ='delete__card'></span>
//         `
//     );

//     let likeCard = todoMem.querySelector('.like__card');
//     let deleteCard = todoMem.querySelector('delete__card');

//     cardsMem.appendChild(todoMem);



// }

//добавление картинки
const inputImg = document.querySelector('#input__img');
const inputText = document.querySelector('#input__text');
const addBtn = document.querySelector('#add__to__do');

addBtn.addEventListener('click', () => {
    if (inputImg.value.trim() !== '' && inputText.value.trim() !== '') {
        createCard(inputImg.value, inputText.value);

        inputImg.value = '';
        inputText.value = '';
    } else {
        alert('Введите задачу');
    }
});

const createCard = (img, text) => {
    let todoMem = document.createElement('div');
    todoMem.className = 'to__do__mem';

    todoMem.innerHTML = `
        <span class="like__card"></span>
        <img class="img__card" src="${img}"></img>
        <span class="text__card">${text}</span>
        <span class="delete__card"></span>
    `;

    document.body.appendChild(todoMem); 
       let likeCard = todoMem.querySelector('.like__card');
 let deleteCard = todoMem.querySelector('delete__card');

};