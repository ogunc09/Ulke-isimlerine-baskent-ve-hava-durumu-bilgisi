const yargs = require('yargs');
const kisi = require('./kişi');
yargs.version('1.5.3');

//kişi ekle komutu
yargs.command({
    command: 'ekle',
    describe : 'yeni kişi eklemeye yarar',
    builder : {
        isim : {
            describe: 'eklenecek kişi adı',
            demandOption: true,
            type : 'sting',
        },
        tel:{
            describe: 'eklenecek kişinin telefon numarası',
            demandOption : 'ture',
            type : 'string',
        }
    },
    handler(argv) {
       //console.log("isim:"+argv.isim +"tel no:"+argv.tel);
        kisi.kisiEkle(argv.isim, argv.tel)
    }
});

yargs.command({
    command : 'sil',
    describe : "kişiyi siler",
    builder : {
        isim : {
            describe: 'silenilecek kişi adı',
            demandOption: true,
            type : 'sting',
        }
    },
    handler(argv) {
        kisi.kisiSil(argv.isim, argv.tel);
        //console.log("silinecek kişi adı:"+argv.isim);
    }
})
yargs.command({
    command : 'goster',
    describe : 'kişiyi gösterir',
    builder : {
        isim : {
            describe: 'gösterilecek kişi adı',
            demandOption: true,
            type : 'string',
        }
    },
    handler(argv){
        kisi.kisiGoster(argv.isim, argv.tel);
        //console.log("gösterilen kişi adı:"+argv.isim);
    }
})

yargs.command({
    command : 'listele',
    describe : 'tüm rehberi listeler',
    builder : {
        isim : {
            describe: 'listelenecek kişi adı',
            demandOption: true,
            type : 'sting',
        }
    },
    handler(argv){
        kisi.kisiListele(argv.isim, argv.tel);
        //console.log("Tüm rehber listelenecek");
    }
})

//console.log(yargs.argv);
yargs.parse();