const https = require ('https');
const yargs = require ('yargs'); 
const capitalWeather = require ('./capital.weather');

start();

function start(){
    yargs.command({
        command : 'import',  //getir
        describe : 'country information', //bilgileri getirilecek ülke
        builder : {
           country: {
            describe: 'write country in english', //ülkeyi ingilizce yazınız
            demanOption: true,
            type : 'string',
           },
            
        },
        handler(argv) {
            capitalWeather(argv.country);   
        }  
    })   
    yargs.parse();
}
module.exports = start;



/*
https.get('https://restcountries.com/v3.1/name/turkey', (response) => {

    let data = '';
    response.on('data', chunk => {
        //console.log(chunk);
        data = data + chunk;
    });

    response.on('end', () => {
        const jsonData = JSON.parse(data);
        if(jsonData[0] != null)   
            console.log(jsonData[0].timezones[0]);
        else console.error("veri getirilemedi");
        })


}).on('error', err => {
    console.log("HATAAAAAA"+ err.message);
});

*/