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

btnSearch.addEventListener('click', () => {
    const cityValue = city.value;
    let stations;
    if (cityValue === 'msk') {
        stations = stationsMsk;
    } else if (cityValue === 'sam') {
        stations = stationsSam;
    } else if (cityValue === 'kzn') {
        stations = stationsKzn;
    } else if (cityValue === 'ekb') {
        stations = stationsEkb;
    } else if (cityValue === 'nvs') {
        stations = stationsNvs;
    } else if (cityValue === 'nn') {
        stations = stationsNn;
    }
    table.innerHTML = '';
    stations.forEach((station) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${station.name}</td>
            <td>${station.distance}</td>
            <td>${station.time}</td>
        `;
        table.appendChild(tr);
    });
    metroSearch.style.display = 'block';
    base.style.display = 'none';
    btnOpen.style.display = 'block';
    city.style.display = 'block';
});

