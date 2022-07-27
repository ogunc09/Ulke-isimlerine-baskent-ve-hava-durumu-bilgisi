const path = require('path');
const fs = require('fs');

const pathObject = path.parse(__dirname); // o an çalışan dosyanın klosör yapısının tam yolunu verir.

console.log(pathObject.dir);

fs.readdir('./', {withFileTypes: true }, function(err,files) {

    if(err) console.log("hata cıktı"+err);

    console.log(files[0].isDirectory());
});