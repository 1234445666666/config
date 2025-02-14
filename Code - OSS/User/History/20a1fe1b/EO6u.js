// сохранение данных пользоветеля
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.btn__submit');

submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const passwordOne = passwordInput.value;
    const passwordTwo = confirmPasswordInput.value;

    if (passwordOne !== passwordTwo) {
        alert('Пароли не совпадают');
        return;
    }

    const table = document.querySelector('.table');
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const passwordCell = newRow.insertCell();

    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = passwordOne;

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';

    document.querySelector('.base').style.display = 'flex';
    document.querySelector('.form').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    openBase.style.display = 'none';

    alert('Данные успешно сохранены');

    // console.log(name, email, passwordOne);
});



// открытие и закрытие базы данных
const openBase = document.querySelector('.btn__open');
const base = document.querySelector('.base');

openBase.addEventListener('click', () => {
   document.querySelector('.base').style.display = 'flex';
   document.querySelector('.form').style.display = 'none';
   document.querySelector('.title').style.display = 'none';
   openBase.style.display = 'none';

});


const closeBase = document.querySelector('.btn__close')

closeBase.addEventListener('click', () => {
    document.querySelector('.base').style.display = 'none';
    document.querySelector('.form').style.display = 'flex';
    document.querySelector('.title').style.display = 'flex';
    openBase.style.display = 'flex';
});



