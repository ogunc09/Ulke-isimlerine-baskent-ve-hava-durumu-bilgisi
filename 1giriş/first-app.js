const myModule = require('./module-nedir'); // require ettiğimiz modülleri "const" atarız  ==> "let" olsaydı ileridee aynı "ad" değişkenli bir şey tanımladığımızda son tanımladığımız çıkardı 
//myModule yazma sebebimiz dışarıdan birden fazla değer gelecek
const pcInfo = require ('./pc_info');


function selamVer(){
    console.log("Merhaba Node JS");
    //console.log(window);
    globalThis.console.log("bu yazı global nesneden geldi");
    //console.log(isim);
}

selamVer();
console.log(myModule.ad);
myModule.ekle(5,10);
myModule.cikar(65,38);
console.log(myModule.personel.yas);

pcInfo.pcInfo();
