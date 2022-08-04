/***********************************************************************************************
 *  Objetivo: Criação de função para calcular tabuada
 *  Data: 04/08/2022
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/


const calcularTabuada = function (numero1)
{
    let tabuada = numero1;
    let resultado;
    let cont = 0;

    // while
    console.log('\n************ Testando o WHILE\n');
        while (cont <= 10) 
        {
            resultado = tabuada * cont;
            console.log(tabuada + ' x ' + cont + ' = ' + resultado);   
            //cont = cont + 1;
            //cont ++;
            cont +=1;
        }

        //for
        console.log('\n************ Testando o FOR\n');
        for (cont = 0; cont <= 10; cont++) {
            resultado = tabuada * cont;
            console.log(tabuada + ' x ' + cont + ' = ' + resultado);
        }

}

module.exports = {
    calcularTabuada
}
