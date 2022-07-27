const os = require('os');
const fs = require('fs');


let pcInfo = function(){

    
let freeRam = byteToGB(os.freemem);
let totalRam = byteToGB(os.totalmem());
let usedRam = totalRam - freeRam;

let cpuSayisi = os.cpus().length;

    fs.writeFile('pc_info.txt', pcInfoGoster(), (err)=> {
        if(err) console.log("dosyaya yazarken hata oluştu")
    });
    
    function byteToGB(toplamByte) {
        return (toplamByte / 1024 / 1024 / 1024).toFixed(2);
    }
    
    function pcInfoGoster() {
        return`toplam ram: ${totalRam} kullanılan ram: ${usedRam} free ram: ${freeRam} cpu sayısı ${cpuSayisi} `;
    }
    

}


exports.pcInfo = pcInfo;