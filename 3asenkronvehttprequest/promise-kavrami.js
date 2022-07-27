const myPromise = new Promise((resolve, reject) => {  //resolve(kesin karar vermek), reject(reddetmek) bir hata çıktığında belirtilir.
    console.log("3 saniyelik işlem başladı");

    setTimeout(() => {
        console.log("İşlem bitti");
       // resolve("İşlem sonucu burada"); //resolve çalışıyorsa reject çalışmaz
       reject("Hata çıktı");
    }, 3000);

});

myPromise.then((sonuc) => {
    console.log(sonuc);
}).catch((err) => {
    console.log("HATAAAAAAAAAA:" +err);
});