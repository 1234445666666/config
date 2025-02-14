//1 
const result = document.querySelector('.text');

const result2 = document.querySelector('.text1');


result.textContent = 'aaaaaaaaa';
result2.textContent = 'bbbbbbbbbbbbbb';


//2

const img = document.querySelector('.picture');

img.src = '1.jpeg';

img.alt = 'картинка';

//3

const remove = document.getElementById('123');


const button = document.getElementById('btn');


button.addEventListener('click',function() {
    remove.classList.toggle('box');
});

//4

const input = document.querySelector('input');

const button2 = document.querySelector('.btn2');

button2.addEventListener('click', function() {
    console.log(input.value);
})

//5

const add = document.querySelector('ul');

const list = document.createElement('li');

list.textContent = 'item';

add.append(list);


const list2 = document.createElement('li');

list2.textContent = 'item2';

add.append(list2);













