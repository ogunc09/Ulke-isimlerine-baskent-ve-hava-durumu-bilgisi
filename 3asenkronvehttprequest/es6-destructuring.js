/*

//array destructuring

let isim = ['öğünç', 'filiz'];
const ad = isim[0];
const soyad = isim[1];
console.log(isim[0]+" "+ isim[1]);

let [firstName, lastName] = isim
console.log(firstName + " " + lastName);

let [a,b] = "Öğünç Filiz".split(' ');
console.log(a);
console.log(b);


let [ilk, ,son] = ['sarı', 'mavi', 'beyaz'];
console.log(ilk + " " + son);

let kisi = {};

[kisi.ad, kisi.soyadi] = "Öğünç Filiz".split(' ');
console.log(kisi);

let [ad1, ad2, ...ad3] = ['ogunc' , 'hasan' , 'ali' , 'ayşe' , 'fatma']
console.log(ad3);

let [s1="bilinmiyor", s2="bilinmiyor"] = ['merhaba']
console.log(s1 + " " + s2);

*/

/*

//object destructuring

let options = {
    title: undefined,
    width : undefined,
    height : undefined
};

let { title="başlık", width="50", height="50"} = options;

console.log(title + " " + width + " " + height);

const kisi = {
    ad: 'öğünç',
    yasi: 22
};

const { ad, yasi } = kisi;       
console.log(ad+" "+yasi);

// const { ad:isim, yasi:yas } = kisi
// console.log(isim + " " + yas);

const meslek = "mühendis";
const il = "ankara";

const person = {   //key değeri ile value değeri aynı olduğundan 1 kere yazabiliriz
    meslek,        // meslek: meslek,
    il,             // il: il,
    yas: 22,
    ilce: "batıkent"
}

const { meslek: m, il: i, ...geriKalani } = person;

console.log(geriKalani.ilce);

*/

let kisi = {
    ad: {
        firstName : "öğünç",
        lastName : "Filiz",
    },
    sevdigiRenkler: ['sarı', 'mavi', 'yeşil'],
    yas:22
};
// console.log(kisi.ad.firstName+" " + kisi.sevdigiRenkler[1]);

const {
    ad: {
        firstName,
        lastName,
    },
    sevdigiRenkler: [item1, item2],
    yas,
} = kisi;
console.log(`${firstName} ${item2}`);


function kisiyiGoster(isim = "bilinmiyor", yas = 0, boyu = 175, sevdigiRenkler = []) {

}

kisiyiGoster("emre", undefined, undefined, ['yesil', 'kırmızı']);

const parametreler ={
    isim : "emre",
    yas : 22,
    sevdigiRenkler : ['yesil', 'kırmızı']
}

kisiyiGoster2(parametreler);

function kisiyiGoster2({isim = "bilinmiyor", sevdigiRenkler = [], yas=0, boyu=0}) {

    console.log(isim+" " + yas);
}
