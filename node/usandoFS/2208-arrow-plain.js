const fs = require('fs');

// arrow natation
// const f = () => {};

// function(plain) notation
//() => {};

fs.readFile ('./53180.049062_2019_23', (erro, conteudo) => {
   console.log(erro, String(conteudo));
});
