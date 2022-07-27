// JS bazı yapılara direkt erişip kullanabiliriz. Bunlara golabal objects denir 
//console, settimeout, cleartimeout, setinterval,clearinterval gibi...

//browserdaki js'de tüm değişkenleri fonksiyonları ekranı barındıran window isimki global bir nesnemiz vardı. window.console_log
// bu yapının node'da bir tanımı yoktur. Karşılığı ise global'dir

//nodejs uygulamarında her bir js dosyası bir module'dür. Bu modulde tanımlanan tüm değişken ve fonksiyonlar bu dosyaya özeldir.
//Yani private, bunları erişebilir yapmak bizim elimizde..

//console.log(module) //ilgili dosyayla ilgili tüm detaylar

let isim = "öğünç filiz ";
let topla = function(a, b){
    console.log(a + b);
}

exports.ad = isim; //isim değişkeni dışarıdan erişilebilir demek ==> diğer dosyanın haberi olması için "require" kısmını yazdık.
exports.ekle = topla;
exports.cikar = function(a, b){
    console.log(a - b);
} 
exports.personel = {
    'ad': "emre",
    'yas' : 22
}



console.log(module);