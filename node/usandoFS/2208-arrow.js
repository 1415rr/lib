const fs = require('fs');

// arrow natation
// const f = () => {};
const cauback = (erro, conteudo) => {
   console.log(erro, String(conteudo));
}

// function (plain) notation
//() => {};
fs.readFile ('./53180.049062_2019_23', cauback);
