
//1 
const result = document.querySelector('.text');

const result2 = document.querySelector('.text1');


result.textContent = 'asdasdxczc';
result2.textContent = 'asdsfsdfdcgvc';


//2

const img = document.querySelector('.picture');

img.src = 'wallnut-pvz.png';

img.alt = 'Kot';

//3

const remove = document.getElementById('123');


const button = document.getElementById('knopka');


button.addEventListener('click',function() {
    remove.classList.toggle('box');
});

//4

const button2 = document.querySelector('.btn');

const input = document.querySelector('input')

button2.addEventListener('click' , function() {
    console.log(input.value)
})

//5

const add = document.querySelector('ul');

const list = document.createElement('li');

list.textContent = 'item';

add.append(list);


const list2 = document.createElement('li');

list2.textContent = 'item2';

add.append(list2);