const axios = require ('axios');

function findCapitalWeather(ulke){

    axios.get('https://restcountries.com/v3.1/name/'+ulke).then (res => {
        /*
        const ulke = res.data[0];
        const baskent = ulke.capital;
        const nufus = ulke.population;
        const enlem = ulke.latlng[0];
        const boylam = ulke.latlng[1];
        */

        const [ {population:nufus , capital:baskent, latlng: [enlem, boylam]} ] = res.data;
        
        console.log(`Nufusu : ${nufus} Enlem : ${enlem} Boylam : ${boylam} ve Başkent : ${baskent}`);
    
    
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ baskent +'&appid=ed7f5099d8cb5b2f335abd46791258d4&lang=tr&units=metric').then(res => {
            //console.log(res.data);
            const { name:baskentOlanSehir, weather:[{description:havaDurumu}], main:{temp:sicaklik, humidity:Nem}, wind:{speed:RuzgarHizi} } = res.data;

            console.log(`Başkent ${baskentOlanSehir} Bugün Hava ${havaDurumu} Sıcaklık ${sicaklik}, Nem ${Nem}, Rüzgar hızı ${RuzgarHizi}`);
        })
    
    });
}
module.exports = findCapitalWeather;

