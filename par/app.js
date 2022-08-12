/***********************************************************************************************
 *  Objetivo: Aplicar estruturas de repetição (While e FOR) e realizar analises de par e impar
 *  Data: 11/08/2022
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/

 console.log('\n###### Analisar e listar numeros pares e impares ######\n');

 const { calcularPar } = require('./modulo/par.js');

 var readline = require('readline');

 // instancia do objeto para entrada e saida de dados via promt
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 entradaDados.question('Digite o numero que deve iniciar a lista: \n', function(numeroIni){
    let iniNumero = numeroIni;
    
    entradaDados.question('Digite o numero que deve terminar a lista: \n', function(numeroTerm){
        let termNumero = numeroTerm;

        entradaDados.question('Digite o tipo de numero que deseja listar: \n', function(numeroTipo){
            let tipoNumero = numeroTipo;

            let calculo = calcularPar(iniNumero,termNumero,tipoNumero)

                if(calculo){
                    console.log('Voce deve digitar corretamente');
                }
        });
    });
});
