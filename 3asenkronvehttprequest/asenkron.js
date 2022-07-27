console.log("başladı");

setTimeout(function(){
    console.log("3 saniyelik ara bitti");
},3000);

setTimeout( () => console.log("0 saniyelik işlem bitti"),0);

console.log("bitti");
console.log("naber");
console.log("oki");