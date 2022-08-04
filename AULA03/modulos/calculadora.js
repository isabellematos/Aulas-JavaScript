/***************************************************************************************************** 
*   Objetivo: Arquivo que contem todas as funçoes para calculos matematicos
*   Autora: Isabelle Vitoria
*   Data de criação: 01/08/2022
*   Versão: 1.0

*******************************************************************************************************/



// metodo tradicional de se criar uma funcao --> formato menos utilizado no JS
/*function calcular (valor1, valor2, opcaoCalculo)
{
    //criando variaveis locais para receber o conteudo dos argumentos
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;

    
    if(operacao == 'SOMAR' || operacao == '+'){
         resultado = numero1 + numero2;
    }else if(operacao == 'SUBTRAIR' || operacao == '-'){
        resultado = numero1 - numero2;
    }else if(operacao == 'MULTIPLICAR' || operacao == '*'){
        resultado = numero1 * numero2;
    }else if(operacao == 'DIVIDIR' || operacao == '/'){
        if(numero2 == 0){
            console.log('ERRO: nao se pode dividir um numero por 0');
            erro = true;
            exit();
        }
    resultado = numero1 / numero2;
        }else{
            console.log ('ERRO: nao foi escolhido uma operacao valida');
            erro = true;
            exit();
        }

        if (erro)
            return false;
        else
            return resultado;
} */

// metodo de criacao de funcao utilizando o padrao de call back --> formato bastante utilizado
const calcular = function(valor1, valor2, opcaoCalculo)
{
//criando variaveis locais para receber o conteudo dos argumentos
let numero1 = valor1;
let numero2 = valor2;
let operacao = opcaoCalculo.toUpperCase();
let resultado;
let erro = false;


if(operacao == 'SOMAR' || operacao == '+'){
    resultado = somar(numero1,numero2);
}else if(operacao == 'SUBTRAIR' || operacao == '-'){
    resultado = subtrair(numero1,numero2);
}else if(operacao == 'MULTIPLICAR' || operacao == '*'){
    resultado = multiplicar(numero1,numero2);
}else if(operacao == 'DIVIDIR' || operacao == '/'){
    if(numero2 == 0){
        console.log('ERRO: nao se pode dividir um numero por 0');
        erro = true;
    
    }
resultado = dividir(numero1,numero2);
    }else{
        console.log ('ERRO: nao foi escolhido uma operacao valida');
        erro = true;
    }

    if (erro)
        return false;
    else
        return resultado.toFixed(2);
}

// modelo de funcao chamado de arrow function
const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2);
const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2);
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2);
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2);



// as funções que serão importadas em outros projetos, precisam obrigatoriamenta serem incluidas no module.exports
    //as funções que não forem incluidas no module.exports funcionarão apenas localmente nesse arquivo
module.exports = {
    calcular
}