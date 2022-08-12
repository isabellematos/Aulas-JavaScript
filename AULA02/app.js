console.log('exercicio para calcular a media');

// import da biblioteca para interacao com o usuario
var readline = require('readline');
// instancia do objeto para entrada e saida de dados via promt
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// var eh uma variavel de escopo global, sendo mais pesada e menos comum
// let eh uma variavel de escopo local, mais leve e comum
// const eh a ideia de uma constante, um valor que nao se altera, como o pi

// entrada no nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome){
   // declaracao de variavel local e atribuindo um valor
    let nomeAluno = nome;
   // console.log('Nome do aluno:'+nomeAluno);
    //entrada da nota 1
   entradaDados.question('Entrar com valor da nota 1: \n', function (valor1){
       let nota1 = valor1;

       entradaDados.question('Entrar com valor da nota 2:\n', function (valor2){
           let nota2 = valor2;

           entradaDados.question('Entrar com valor da nota 3\n', function (valor3){
               let nota3 = valor3;

               entradaDados.question('Entrada com valor da nota 4\n', function (valor4){
                   let nota4 = valor4;
                   let media;
                   let statusAluno;

                   //validacao para o nome do aluno
                   if(nomeAluno == ''){
                       console.log('Nome do aluno deve ser informado.')
                       entradaDados.close();
                       // validacao para notas
                    }else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log('E necessario informar todas as notas para o calculo.');
                        entradaDados.close();
                    }else{
                        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)  + parseFloat(nota4))/4;
                            if(media >= 7){
                                statusAluno = 'APROVADO';
                            }else if (media >= 4 && media <= 6.9){
                                statusAluno = 'EXAME';
                            }  else {
                                statusAluno = 'REPROVADO';
                            }
                            // toFixed() - permite limitar a quantidade de casas decimais 
                            console.log('O aluno ['+ nomeAluno +'], teve media ' + media.toFixed(1) + '\n e esta: ' + statusAluno);

                            // fecha o objeto entradaDados
                            entradaDados.close();
                    }
               });
           });
       });
   });
});