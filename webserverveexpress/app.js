// requiest bizim web sunucusuna yaptığımız istekler 

const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

//joi,verilerinizi basit,sezgisel ve okunabilir bir dil kullanarak tanımlamanıza olanak tanır.

app.use(express.json());

const kullanicilar = [
    {id: 1, ad: 'öğünç', yas: 22},
    {id: 2, ad: 'hasan', yas: 32},
    {id: 3, ad: 'ali', yas: 18},
    {id: 4, ad: 'ayşe', yas: 27},
];

app.get('/', (req, res) => {
    console.log("Ana sayfaya girildi");
    res.send("Merhaba from index");
});

app.get('/users', (req, res) => {
    console.log(req.query);
    if (req.query.ters) {
        res.send(kullanicilar.reverse()); //id nin sonuna "?ters=true" koyarak dizileri ters sıraladık
    }else {
        res.send(kullanicilar);
    }

    res.send(kullanicilar);    
});

app.get('/users/:id', (req, res) => {

    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if (bulunanUser) {
        res.send(bulunanUser);
    }else {
        res.status(404).send(req.params.id + " idli kullanıcı bulnunamadı"); //404 uyarısını f12 ile bakarak gördük
    }
});

app.post('/users', (req, res) => {

const {error} = kullaniciBilgileriniOnayla(req.body);   
    
    if (error) {
        res.status(400).send(error.details[0].message)
    }else {
        const yeniKullanici = {
            id: kullanicilar.length + 1,
            ad: req.body.ad,
            yas: req.body.yas
        };
    
        kullanicilar.push(yeniKullanici);
        res.send(yeniKullanici);
    
    }



//post isteklerinde tavsiye edilen = bir eleman eklenilirse ve başarılı olursa bunu kullanıcıya geri gönderin.

// get = tablodan veri almak için 
// post = tabloya veri eklemek için
// put = tablodaki veriyi güncellemek için

});

app.put('/users/:id', (req, res) => {

    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));

    if (!bulunanUser) {
         res.status(404).send(`${req.params.id} li kullanıcı bulunamadı `);
        return;
    }
   
    const {error} = kullaniciBilgileriniOnayla(req.body);
    
    if (error) {
        res.status(400).send(error.details[0].message)
    }else {
        
        bulunanUser.ad = req.body.ad;
        bulunanUser.yas = req.body.yas;
    
        
        res.send(bulunanUser);
    
    }
});

app.delete('/users/:id', (req, res) => {
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if (bulunanUser) {
        const index = kullanicilar.indexOf(bulunanUser);
        kullanicilar.splice(index, 1);
        res.send(bulunanUser);

    }else {
        res.status(404).send(req.params.id + " idli kullanıcı bulnunamadı"); //404 uyarısını f12 ile bakarak gördük
    }
})

function kullaniciBilgileriniOnayla(user) {
    const schema = Joi.object({

        ad: Joi.string().min(3).max(30).required(),
        yas: Joi.number().integer().min(10).max(99).required(),    
    });

    return schema.validate(user);

}

app.listen(3000, () => {
    console.log("3000 portuna giriş yapılıyor")
});



//framework = uygulamarı yaparken daha hızlı yol almamızı sağlayacak yardımcı fonk. araçlara sahip olan daha önceden başka insanlar tarafından yazılmış yapılardır.

//npm init -y ile package.json getirdik
//npm i express yaptık (modul kurulumu)