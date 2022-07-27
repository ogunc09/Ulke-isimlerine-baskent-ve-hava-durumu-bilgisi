console.log("Başladı")
console.log("Bitti")

function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log(id  +  " idli user getiriliyor");
        setTimeout(() => {
            resolve({ id: id, ad: "emre"});
        },1500);
    });
}

function getCourse(userName) {
    return new Promise ((resolve, reject) => {
    console.log(userName + " kişinin kursları getirelecek"); 
        setTimeout(() => {
            resolve(['java', 'flutter', 'kotlin'])
        }, 2000);

    });
}

function getComments(courseName) {
    return new Promise((resolve, reject) => {
        console.log(courseName + " isimli kursun yorumları getiriliyor");
        setTimeout(() => {
            reject("yorumlar getirirken hata oluştu"); //çıktıda hata yazısı görelim diye yazdık
            resolve("harika bir kurs");
        },2000);
    
    });
}

//awaitleri kullanabilmek için fonksiyonun promise olması lazım

async function yorumGetir(){  //awaitlerin çalışması için fonksiyonun async olduğunu belirtmemiz gerekiyor.
    try{
    const userObj = await getUser(12345);  //await(beklemek)
    const kursDizisi = await getCourse(userObj.ad);
    const yorum = await getComments(kursDizisi[0]);
    console.log(yorum);

    }catch(e){
        console.log("####"+e);
    }
    
}
console.log("111111111");
yorumGetir();
console.log("22222222");



/* aşağıdaki yapının uzun hali 

getUser(123).then((userObj) => {
    getCourse(userObj.ad).then((kursDizisi) => {
        getComments(kursDizisi[0]).then((yorum) => {
            console.log(yorum);
        })
    })
});

*/

/*

getUser(123)
    .then(userObj => getCourse(userObj.ad))
    .then(kursDizisi =>getComments(kursDizisi[0]))
    .then(yorum => console.log(yorum))
    .catch(hata => console.log("hata: "+hata));

*/ 
    
// catch komutu olası hata çıkma durumunda hatayı yakalıyor    
