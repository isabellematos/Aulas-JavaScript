
const erro = function (numero1, numero2)
{ 
    let numeroIni = numero1;
    let numeroTerm = numero2;
    let erro = true;

    if (isNaN (numeroIni) || isNaN (numeroTerm) ){
        return erro;
    }
    if (numeroTerm < numeroIni ){
        return erro;
    }
    if (numeroIni < 1 || numeroIni > 501){
        return erro;
    }
    if (numeroTerm < 100 || numeroTerm < 1001){
        return erro;
    }

}

const calcularPar = function (numero1, numero2,numeroTipo)
{
    let numeroIni = numero1;
    let numeroTerm = numero2;
    let tipo = numeroTipo.toLowerCase()

    if(tipo == 'par'|| 'pares'){
        console.log('\nNúmeros Pares')
        for (let i = numeroIni; i <=numeroTerm; i++){
            if(i % 2 == 0){
                console.log(i)
            }
        }
    }else if(tipo == 'impar'|| 'impares'){
        console.log('\nNúmeros Impares')
        for (let i = numeroIni; i <=numeroTerm; i++){
            if(i % 2 != 0){
                console.log(i)
            }
        }
    }else{
        return true
    }
}

module.exports = {
    calcularPar,
    erro
}