const fs = require('fs');
const chalk = require('chalk');

//kisiler json tabanlı bir dosyada tutulacak
//dosyadan veriler okunup js dizisinne dönüştürülecek
//jsonu js objelerine dönüştürmek için JSON.parse(json) ,, objeleri jsona dönüştürmek için JSON.stringify(jsDizisi)
//dosyadan okunan değerler Buffer tipindedir, tostring diyerek okunabilir json değerlere dönüştürülebilir.

// const ekle = function (ad, telNo) { //ArrowFunction kullanmasaydık
const ekle =  (ad, telNo) => {
   
    // console.log("Eklenecek kişi " + ad + " telno: " + telNo);
    const kisilerDizisi = dosyadanKisileriOku();

    const ayniAdaSahipKisilerDizisi = kisilerDizisi.filter( kisi => kisi.isim === ad); //arrowFunction ile yaptık

    if (ayniAdaSahipKisilerDizisi.length === 0) {
        kisilerDizisi.push({
            isim: ad,
            tel: telNo,
        });
        dosyayaKisileriYaz(kisilerDizisi);
    }else {
        console.log(chalk.red.inverse(ad + " isimli kayıt zaten var ")); //inverse daha belirgin hale getiriyor

    }
    
 
}

const dosyayaKisileriYaz = kisilerDizisi => { //ArrowFunction
    const jsonData = JSON.stringify(kisilerDizisi);
    fs.writeFileSync('kisiler.json', jsonData);


}

const dosyadanKisileriOku =  _ => { //parametre almadığı için "_" koyabildik yoksa () olacaktı 

    try {
        const dataBuffer = fs.readFileSync('kisiler.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch (e) {
        return [];
        
    }
}

const sil =  isim  => {
    console.log(" silinecek kişi " + isim);
    const tumKisiler = dosyadanKisileriOku();
    const dosyayaTekrarYazilacakKisiler = tumKisiler.filter( kisi =>  kisi.isim !== isim); //ArrowFuntion

    if(tumKisiler.length > dosyayaTekrarYazilacakKisiler.length) {
        console.log(chalk.green.inverse(" Kişi bulundu ve silindi"));
        dosyayaKisileriYaz(dosyayaTekrarYazilacakKisiler);
    } else {
        console.log(chalk.blue.inverse( isim+ " adlı kişi listede bulunamadı "));

        
    }



}

const goster = isim => { //goster, isim diye bir parametre alan fonksiyon
    console.log();
    console.log(chalk.yellow.inverse("gösterilecek kişi " + isim));
    const kisilerDizisi =dosyadanKisileriOku();
    const bulunanKisi = kisilerDizisi.find(kisi => kisi.isim === isim);

    if (bulunanKisi) {
        console.log(chalk.green.inverse( "Aradagınız kişinin numarası :"+bulunanKisi.tel));

    }else{
        console.log(chalk.blue.inverse( isim+ " adlı kişi listede bulunamadı "));

        
    }
}

const listele =  _ => {
    console.log(chalk.yellow("tüm rehber gösterilecek "));
    const kisilerDizisi = dosyadanKisileriOku();
    kisilerDizisi.forEach( kisi => console.log(" adı: "+ kisi.isim + " Telefon Numarası: "+kisi.tel));
        
};

module.exports = {
    kisiEkle: ekle,
    kisiSil: sil,
    kisiGoster: goster,
    kisiListele: listele
}