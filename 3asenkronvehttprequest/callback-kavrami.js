//callback = bir fonksiyona parametre verip sonra onu geri çağırma işlemi

console.log("program başladı");

getUser(12345, (userObject)  =>{
    console.log("Getirilen user: "+userObject.ad);
    getCourse(userObject.ad, (kursDizisi) => {
        console.log("Kurs dizisi: "+kursDizisi);
        getComments(kursDizisi[0]);
    });
});


console.log("program bitti");

function getUser (id, callback) {
    console.log(id + " idli user getiriliyor");
    setTimeout(()=>{
        
        callback({ id: id, ad:  "emre"}); //tetiklenme görevi burda başlıyor sonra yukarıdan aşağı devam ediyor
        
    },1500)
} 

function getCourse (userName, callback) {
    console.log(userName + " kişininin kursları getirilecek");
    setTimeout(()=> {
       
        callback(['java', 'flutter', 'kotlin'])
    },2000);
}

function getComments (kursAdi) {
    console.log(kursAdi  + " isimki kursun yorumları getiriliyor");
    setTimeout(() => {
        console.log("harika bir kurs");
        
    },2000)
}

/* senkron
console.log("program başladı");
const user = getUSer(123);
const kurs = getCourse(user);
const yorum = getComments(kurs[0]);
console.log("Program bitti"); 
*/