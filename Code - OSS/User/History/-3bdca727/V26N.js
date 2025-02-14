import { stationsMsk, stationsSam, stationsKzn, stationsEkb, stationsNvs, stationsNn } from './city.js';

//реализация выбора гороода
const btnOpenBase = document.querySelector('.btn__open');
const city = document.querySelector('#city');
const base = document.querySelector('.base');
const metroSearch = document.querySelector('.metro');

btnOpenBase.addEventListener('click', () => {
    base.style.display = 'block';
    btnOpen.style.display = 'none';
    city.style.display = 'none';
    metroSearch.style.display = 'none';
});

//реализация поиска станции метро
const btnSearch = document.querySelector('.btn__search');
const inputStation = document.querySelector('input');
const outputStations = document.querySelector('.table');
const search = document.querySelector('.search');


