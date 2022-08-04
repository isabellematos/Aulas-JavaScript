/***********************************************************************************************
 *  Objetivo: Aplicar estruturas de repetição (While e FOR) 
 *  Data: 04/08/2022s
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/

 console.log('\n###### Calcular uma tabuada simples ######\n');

 const { calcularTabuada } = require('./modulos/tabuada.js');

 // import da biblioteca para interacao com o usuario
 var readline = require('readline');

 // instancia do objeto para entrada e saida de dados via promt
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 entradaDados.question('Digite a tabuada a ser calculada: \n', function(numero){
    let tabuada = numero;
    calcularTabuada(tabuada);

 });