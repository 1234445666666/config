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
    if (inputStation.value !== '') {
        const requestStation = inputStation.value;



        let station = requestStation[0].toUpperCase() + requestStation.slice(1);
        console.log(station);
        
    }
    else if (inputStation.value == null) ) {
        alert('Введите название станции');
    }

    else if (inputStation.value == '' ) {
        alert('Введите название станции');
    }


      

   


  
});






