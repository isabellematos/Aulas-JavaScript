/***********************************************************************************************
 *  Objetivo: Criação de função para calcular tabuada
 *  Data: 11/08/2022
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/

const erro = function (numero1, numero2, contador1, contador2)
{ 
    let numeroIni = numero1;
    let numeroTerm = numero2;
    let iniContador = contador1;
    let termContador = contador2;
    let erro = true;

    if (isNaN (numeroIni) || isNaN (numeroTerm) || isNaN (iniContador) || isNaN (termContador) ){
        return erro;
    }
    if (numeroTerm < numeroIni ){
        return erro;
    }
    if (termContador < iniContador ){
        return erro;
    }
    if (numeroIni < 1 || numeroTerm > 100){
        return erro;
    }
    if (iniContador < 1 || termContador > 50){
        return erro;
    }

}

const calcularTabuada = function (numero1, numero2, contador1, contador2)
{
    let numeroIni = numero1;
    let numeroTerm = numero2;
    let iniContador = contador1;
    let termContador = contador2;


    if(erro(numeroIni, numeroTerm,iniContador,termContador)){
        return true;
    }

    for (let i = numeroIni; i <=numeroTerm; i++ ){

        console.log('\n TABUADA DO ' + i + '\n' )

        for(let j = iniContador; j <=termContador; j++){

            let conta = i*j;

            console.log(i + ' * ' + j + ' = ' + conta)
        }
    }
}


module.exports = {
    calcularTabuada,
    erro
}