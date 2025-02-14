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
    inputStation = inputStation.value.trim;
    searchStation(inputStation);
    searchStation = () => {
        switch (inputStation) {
            case 'msk':
                outputStations.innerHTML = stationsMsk.map((station) => `<li>${station}</li>`).join('');
                break;
            case 'sam':
                outputStations.innerHTML = stationsSam.map((station) => `<li>${station}</li>`).join('');
                break;
            case 'kzn':
                outputStations.innerHTML = stationsKzn.map((station) => `<li>${station}</li>`).join('');
                break;
            case 'ekb':
                outputStations.innerHTML = stationsEkb.map((station) => `<li>${station}</li>`).join('');
                break;
            case 'nvs':
                outputStations.innerHTML = stationsNvs.map((station) => `<li>${station}</li>`).join('');
                break;
            case 'nn':
                outputStations.innerHTML = stationsNn.map((station) => `<li>${station}</li>`).join('');
                break;
        }
        
    }
});


