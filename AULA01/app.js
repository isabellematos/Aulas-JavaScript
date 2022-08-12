//exibe uma mensagem no promt
console.log("Testando o NodeJS");

// import da biblioteca para interacao com o usuario
var readline = require('readline');

// instancia do objeto para entrada e saida de dados via promt
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// coloca uma mensagem no promt para o ususario e o que for digitado eh enviado atraves de uma funcao de call back
entradaDados.question("Digite seu nome: \n", function (nome) {

    console.log("Bem vinde, " +nome+ ".")

});