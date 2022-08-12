/***********************************************************************************************
 *  Objetivo: Aplicar estruturas de repetição (While e FOR) e realizar calculo da tabuada
 *  Data: 11/08/2022
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/

 console.log('\n###### Calcular uma tabuada simples ######\n');

 const { calcularTabuada } = require('./modulo/multiplicar.js');

 var readline = require('readline');

 // instancia do objeto para entrada e saida de dados via promt
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 entradaDados.question('Digite o numero que deve iniciar a tabuada: \n', function(numeroIni){
    let iniNumero = numeroIni;
    
    entradaDados.question('Digite o numero que deve terminar a tabuada: \n', function(numeroTerm){
        let termNumero = numeroTerm

        entradaDados.question('Digite o numero que indica o inicio do contador: \n', function(contadorIni){
            let iniContador = contadorIni

            entradaDados.question('Digite o numero que indica o termino do contador: \n', function(contadorTerm){
                let termContador = contadorTerm

                let calculo = calcularTabuada(iniNumero,termNumero,iniContador,termContador)

                if(calculo){
                    console.log('Voce deve digitar corretamente');
                }

            });
        });
    });
});
