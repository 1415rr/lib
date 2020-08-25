const fs = require('fs');

// arrow notation
// const f = () => {};

// function(plain) notation
//() => {};
const leArq = arquivo => new Promise ((resolvido, rejeitado) => { 
   // segundo parâmetro é um callback.
   fs.readFile (arquivo, (erroEscopo1, conteudoEscopo1) => {
      if(erroEscopo1) {
         rejeitado(erroEscopo1);
      } else {
         resolvido(conteudoEscopo1);
      }

   });
});

/* a estrutura da função que é a promise recebe sempre os parâmetros 
then/conteudo(sucesso), catch/erro e finally(executa em qualquer resultado)
aqui, eu não mantive o escopo das variáveis, e para o finally, eu 
nem defini uma variável/função.
*/
leArq ('./53180.049062_2019_23')
   .then( ConteudoEscopo2 => {
   console.log (null, String(ConteudoEscopo2));
   })
   .catch( ErroEscopo2 => {
      console.log (null, `Tratei o erro => ${String(ErroEscopo2)}`);
   })
   .finally( () => {
      console.log (null, 'aqui e´ o finalmente.!');
   } );
