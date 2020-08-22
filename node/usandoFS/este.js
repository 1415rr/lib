// Crie uma requisição para o módulo file system
let fs = require('fs');
// Utilize o appendFile() para criar um novo arquivo que será anexado à sua pasta node
// onde 'meuNovoArquivo.txt será o arquivo a ser criado
// 'Eu sou o novo conteudo é o conteúdo do arquivo txt
fs.appendFile('meuNovoArquivo.txt', 'Assincrono ZERO\n', function (err){
    // Se ocorrer um erro, especifique
    if (err) throw err;
    // Senão, logue no console = salvo!
    console.log("salvo!")
})

try{
   fs.appendFileSync('meuNovoArquivo.txt', 'Sincrono UM\n')
    console.log("salvo sincronizado!");
} catch (err) {
   console.log("erro ss1!")
}

try{
   fs.appendFileSync('meuNovoArquivo.txt', 'Sincrono DOIS\n')
    console.log("salvo sincronizado 2!");
} catch (err) {
   console.log("erro ss2!")
}
