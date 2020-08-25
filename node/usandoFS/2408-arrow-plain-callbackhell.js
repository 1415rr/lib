const fs = require('fs');

// arrow natation
// const f = () => {};

// function(plain) notation
//() => {};


fs.readFile ('./53180.049062_2019_23', (erro049062, conteudo049062) => {
   fs.readFile ('./53180.049060_2019_34', (erro049060, conteudo049060) => {
      fs.readFile ('./53180.049063_2019_78', (erro049063, conteudo049063) => {
         fs.readFile ('./53180.049065_2019_67', (erro049065, conteudo049065) => {
            console.log (erro049062, String(conteudo049062));
            console.log (erro049060, String(conteudo049060));
            console.log (erro049063, String(conteudo049063));
            console.log (erro049065, String(conteudo049065));
         })
      })
   })
}) ;
