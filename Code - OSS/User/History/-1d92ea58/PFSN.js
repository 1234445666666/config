cosnt modelWindow = document.querySelector('.model-window');
const openModel = document.querySelector('.open-model');
const closeModel = document.querySelector('.close-model');

openModel.addEventListener('click', () => {
    modelWindow.classList.add('active');
});

closeModel.addEventListener('click', () => {
    modelWindow.classList.remove('active');
});