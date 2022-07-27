const axios = require ('axios'); //axios, node.js ve tarayıcı için promise tabanlı HTTP İstemcisidir

function findCapitalWeather(country){

    axios.get('https://restcountries.com/v3.1/name/'+country).then (res => {
        
        /*
        const ulke = res.data[0];
        const baskent = ulke.capital;
        const nufus = ulke.population;
        const enlem = ulke.latlng[0];
        const boylam = ulke.latlng[1];
        */

        const [ {population:population , capital:capital, latlng: [latitude, longitude]} ] = res.data; //enlem-boylam
        
        const responsePopulation = (`Population : ${population} Latitude : ${latitude} Longitude : ${longitude} ve Capital : ${capital}`);
        console.log(responsePopulation)
    
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ capital +'&appid=ed7f5099d8cb5b2f335abd46791258d4&lang=en&units=metric').then(res => {
            
            const { name:theCapitalCity, weather:[{description:weather}], main:{temp:temp, humidity:humidity}, wind:{speed:WindSpeed} } = res.data;
//humidity=nem wind=rüzgar temp=sıcaklık
           const responseWeather = (`Capital ${theCapitalCity}  Weather ${weather} Temp ${temp}, Humidity ${humidity}, WindSpeed ${WindSpeed}`);
           console.log(responseWeather)

           return {responsePopulation, responseWeather}
        })
    
    });
}
module.exports = findCapitalWeather;

