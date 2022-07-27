/*
const selamVer = function () {
    console.log("Merhaba");
}
selamVer();

const selamVerArrowFun = () => { console.log("Merhaba from arrow function")}

selamVerArrowFun();

const selamVerArrowFunKisaVersiyon = _ => console.log("Merhaba from arrow function kısa versiyon") //tek satır olduğu için süslü parantez kullanmayabiliriz

selamVerArrowFunKisaVersiyon();

*/

/*
const karesiniAl = function (sayi) {
    return sayi * sayi;
}
console.log(karesiniAl(5));

const karesiniAlArrowFunction = (sayi) => { return sayi * sayi;}
console.log(karesiniAlArrowFunction(6));

const karesiniAlArrowFunction2 = sayi => { return sayi * sayi;}
console.log(karesiniAlArrowFunction2(7));

const karesiniAlArrowFunction3 = sayi =>  sayi * sayi;
console.log(karesiniAlArrowFunction3(8));
*/

/*
const test = function () {
    console.log(this);
}

test(); 

const testArrowFunction = () => {
    console.log(this);  //this çağrıldığında globali gösteriyor
}

testArrowFunction();
*/

/*
const person = {
    ad: "emre altunbilek",
    sevdiğiRenkler:['mavi', 'yeşil'],
    bilgileriGoster : function() {
        console.log(this);
        const obje = this;
        this.sevdiğiRenkler.forEach(function(renk) {
            console.log(obje.ad+" ın sevdiği renker"+renk);
        })
    },
   
}
person.bilgileriGoster(); //this globallikten çıktı içinde çağrıldığı objeyi(person) gösteriyor
*/

const person2 = {
    ad: "emre altunbilek",
    sevdiğiRenkler : ['mavi', 'yesil'],
    bilgileriGoster(){
        console.log(this.ad);
        this.sevdiğiRenkler.forEach((renk) => {
            console.log(this.ad + " ın sevdiği renkler" + renk);
        })
    }
}
person2.bilgileriGoster(); //arrowfunctionlar this yapısına uygun değiller
