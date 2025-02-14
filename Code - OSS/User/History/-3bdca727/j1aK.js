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

    if (citySelect.value === 'msk') {
        const filteredStationsMsk = stationsMsk.filter(station => station.toLowerCase().includes(requestStation.toLowerCase()));
        outputStations.innerHTML = filteredStationsMsk.map(station => `<li>${station}</li>`).join('');
    } else if (citySelect.value === 'sam') {
        const filteredStationsSam = stationsSam.filter(station => station.toLowerCase().includes(requestStation.toLowerCase()));
        outputStations.innerHTML = filteredStationsSam.map(station => `<li>${station}</li>`).join('');
    } else if (citySelect.value === 'kzn') {
        const filteredStationsKzn = stationsKzn.filter(station => station.toLowerCase().includes(requestStation.toLowerCase()));
        outputStations.innerHTML = filteredStationsKzn.map(station => `<li>${station}</li>`).join('');
    } else if (citySelect.value === 'ekb') {
        const filteredStationsEkb = stationsEkb.filter(station => station.toLowerCase().includes(requestStation.toLowerCase()));
        outputStations.innerHTML = filteredStationsEkb.map(station => `<li>${station}</li>`).join('');
    } else if (citySelect.value === 'nvs') {
        const filteredStationsNvs = stationsNvs.filter(station => station.toLowerCase().includes(requestStation.toLowerCase()));
        outputStations.innerHTML = filteredStationsNvs.map(station => `<li>${station}</li>`).join('');
    } else if (citySelect.value === 'nn') {
        const filteredStationsNn = stationsNn.filter(station => station.toLowerCase().includes(requestStation.toLowerCase()));
        outputStations.innerHTML = filteredStationsNn.map(station => `<li>${station}</li>`).join('');
    }
});


