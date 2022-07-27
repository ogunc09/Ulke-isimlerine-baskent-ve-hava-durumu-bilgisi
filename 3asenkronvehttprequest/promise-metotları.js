/*
const promiseBasarili = Promise.resolve ("Başarılı bir şekilde promise sonuçlandı");
const promiseHata = Promise.reject(new Error('Hata oluştu'));

promiseBasarili.then((sonuc)  =>  console.log(sonuc));

promiseHata
    .then((sonuc) => console.log(sonuc))
    .catch(e => console.log(e));
*/

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p1 5 saniye sonra")
    },5000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject("p2 de hata çıktı")
        resolve("p2 4 saniye sonra")
    },4000)
});

const promiseAll = Promise.all([p1, p2]);

promiseAll
    .then(sonuc => console.log(sonuc))
    .catch(e => console.log(e))

const promiseRace = Promise.race([p1, p2]);    
promiseRace.then(sonuc => console.log("race :"+ sonuc));