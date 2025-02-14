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

btnSearch.addEventListener('click', () => {
    const cityValue = search.value.trim();
        let stations;
        switch (cityValue) {
            case 'msk':
                stations = stationsMsk
                break;
            case 'spb':
                stations = stationsSpb
                break;
            case 'sam':
                stations = stationsSam
                break;
            case 'kzn':
                stations = stationsKzn
                break;
            case 'ekb':
                stations = stationsEkb
                break;
            case 'nsk':
                stations = stationsNvs
                break;
            case 'nn':
                stations = stationsNn
                break;
            default:
                alert('введите название')
        }

    


});

