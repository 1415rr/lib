/****************************************************
 * Objetivo: 
 *  1) Ler um arquivo texto e dar saida para a
 *      tela.
 *  2) Conhecer o minimo de algum js que trate 
 *      arquivos.
 * --
 * O mais facil de fazer e' via node, pq esta' fora
 * do browser.
 * O require iporta o modulo no node.
 * heranca do commonjs
 * 
 * falta ver o que fazem
 * os modulos fs e readline.
 * 
 * 
 * Autor: Rafael Silveira Reis 
 * Data: 20/08/2020
 * 
****************************************************/

const readline  = require('readline');
const fs        = require ('fs');
const readable  = fs.createReadStream ('53180.049062_2019_23', {encoding:'latin1'});

const rl        = readline.createInterface ({
    input: readable
})

rl.on ('line', (line)=>{
    
    console.log('>>>>', line);
})

