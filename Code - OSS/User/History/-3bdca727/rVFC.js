import { stationsMsk, stationsSam, stationsKzn, stationsEkb, stationsNvs, stationsNn } from './city.js';

//реализация выбора гороода
const btnOpen = document.querySelector('.btn__open');
const city = document.querySelector('#city');
const base = document.querySelector('.base');
const metroSearch = document.querySelector('.metro');

btnOpen.addEventListener('click', () => {
    base.style.display = 'block';
    btnOpen.style.display = 'none';
    city.style.display = 'none';
    metroSearch.style.display = 'none';
});

//реализация поиска станции метро
const btnSearch = document.querySelector('.btn__search');
const input = document.querySelector('input');
const table = document.querySelector('.table');
const search = document.querySelector('.search');

searchFunction = (text) => {
    station.forEach((item) => {
        if (item.toLowerCase().includes(text.toLowerCase())) {
            table.innerHTML += `<p>${item}</p>`;
        }
    })


}



