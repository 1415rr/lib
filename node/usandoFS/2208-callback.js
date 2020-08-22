const fs = require('fs');

//função cauback é passada como parâmetro em readfile.
function cauback(erro, conteudo) {
   console.log(erro, String(conteudo));
}


fs.readFile ('./53180.049062_2019_23', cauback);

