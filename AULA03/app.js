console.log('Calculadora Simples');

const { exit } = require('process');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// entrada do valor 1
entradaDados.question('Digite o numero1: \n', function (valor1){
    //Declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat(valor1);
    
    //typeof() - verifica qual o tipo de dados de uma variavel ou um objeto
    // console.log(typeof(numero1))

    entradaDados.question('Digite o numero2: \n', function (valor2){
        let numero2 = parseFloat(valor2);

            // funcao para validar se uam variavel e numero ou nao
            if(isNaN(numero1) || isNaN(numero2) ){
                console.log('e necessario digitar um numero');
                exit();
            }

        entradaDados.question('Escolha a operacao a ser calculada: somar[+], subtrair[-], multiplicar[*], dividir[/] \n', function(opcao){
            //Declarando a variavel que vai receber o tipo de operacao matematica e convertendo o texto digitado em MAIUSCULO
                // toUpperCase() - converte em MAIUSCULO
                // toLowerCase() - converte em minusculo
                // = atribuicao
                // == comparacao
                // === comparacao de conteudo e tipo de dados
            let operacao = opcao.toUpperCase();
            let resultado;
            

            if(operacao == 'SOMAR' || operacao == '+'){
                resultado = numero1 + numero2;
            }else if(operacao == 'SUBTRAIR' || operacao == '-'){
                resultado = numero1 - numero2;
            }else if(operacao == 'MULTIPLICAR' || operacao == '*'){
                resultado = numero1 * numero2;
            }else if(operacao == 'DIVIDIR' || operacao == '/'){
                resultado = numero1 / numero2;
            }else{
                resultado = 'ERRO: nao foi escolhido uma operacao valida';
            }

                /** switch(operacao)
                {
                    case 'SOMAR':
                        resultado = numero1 + numero2;
                        break;
                    case 'SUBTRAIR':
                        resultado = numero1 - numero2;
                        break;
                    case 'MULTIPLICAR':
                        resultado = numero1 * numero2;
                        break;
                    case 'DIVIDIR':
                        resultado = numero1 / numero2;
                        break;
                    default:
                        resultado = 'ERRO: nao foi escolhido uma operacao valida';
                } **/

            console.log('Resultado da operacao: ' + resultado);
            entradaDados.close();
        });
    })
})