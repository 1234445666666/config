import { stationsMsk, stationsSam, stationsKzn, stationsEkb, stationsNvs, stationsNn } from './city.js';

//реализация выбора гороода
const btnOpenBase = document.querySelector('.btn__open');
const citySelect = document.querySelector('#city');
const baseOutput = document.querySelector('.base');
const metroSearch = document.querySelector('.metro');

btnOpenBase.addEventListener('click', () => {
    baseOutput.style.display = 'block';
    btnOpenBase.style.display = 'none';
    citySelect.style.display = 'none';
    metroSearch.style.display = 'none';
});

//реализация поиска станции метро
const btnSearch = document.querySelector('.btn__search');
const inputStation = document.querySelector('input');
const outputStations = document.querySelector('.table');
const search = document.querySelector('.search');

btnSearch.addEventListener('click', () => {
    const requestStation = inputStation.value;
    console.log(requestStation);
    searchStation(requestStation);

  
});

searchStation = (text) => {
    if(citySelect.value === 'msk') {
        let stations = stationsMsk;
        search(stations, text);
    }
    else if(citySelect.value === 'sam') {
        let stations = stationsSam;
        search(stations, text);
    }
    else if(citySelect.value === 'kzn') {
        let stations = stationsKzn;
        search(stations, text);
    }
    else if(citySelect.value === 'ekb') {
        let stations = stationsEkb;
        search(stations, text);
    }
    else if(citySelect.value === 'nvs') {
        let stations = stationsNvs;
        search(stations, text);
    }
    else if(citySelect.value === 'nn') {
        let stations = stationsNn;
        search(stations, text);
    }
    
    return;
}


