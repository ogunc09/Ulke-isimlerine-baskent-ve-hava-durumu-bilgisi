const https = require ('https');
const yargs = require ('yargs'); 
const capitalWeather = require ('./capital.weather');

calistir();

function calistir(){
    yargs.command({
        command : 'getir',
        describe : 'bilgileri getirilecek ülke',
        builder : {
           ulke: {
            describe: 'Ülkeyi ingilizce olarak yazınız',
            demanOption: true,
            type : 'string',
           },
            
        },
        handler(argv) {
            capitalWeather(argv.ulke);
            
        }
    })
    
    yargs.parse();
}


module.exports = calistir;



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