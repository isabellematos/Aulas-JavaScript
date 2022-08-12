/***********************************************************************************************
 *  Objetivo: Criação de um relatório do aluno com média e situação no curso
 *  Data: 04/08/2022
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/

console.log('Relatório do estudante');

const { calcularMedia, montarRelatorio, calcularExame, calcMedia } = require('./modulo/media.js');
var readline = require('readline');

// instancia do objeto para entrada e saida de dados via promt
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o nome do professor \n', function (nomeProfessor) {
    let nomeProf = nomeProfessor;

    entradaDados.question('Digite o sexo do professor \n', function (generoProfessor) {
        let genProf = generoProfessor;

        entradaDados.question('Digite o nome do estudante \n', function (nomeAluno) {
            let nomeAlu = nomeAluno;

            entradaDados.question('Digite o sexo do estudante \n', function (generoAluno) {
                let generoAlu = generoAluno;

                entradaDados.question('Digite o nome do curso \n', function (nomeCurso) {
                    let nomeCur = nomeCurso;

                    entradaDados.question('Digite o nome da disciplina \n', function (nomeDisciplina) {
                        let nomeDisc = nomeDisciplina;


                        entradaDados.question('Digite a nota 1 \n', function (valor1) {
                            let nota1 = parseFloat(valor1);

                            entradaDados.question('Digite a nota 2 \n', function (valor2) {
                                let nota2 = parseFloat(valor2);

                                entradaDados.question('Digite a nota 3 \n', function (valor3) {
                                    let nota3 = parseFloat(valor3);

                                    entradaDados.question('Digite a nota 4 \n', function (valor4) {
                                        let nota4 = parseFloat(valor4);
                                        let exame = 0;
                                        let media = calcMedia(nota1, nota2, nota3, nota4)
                                        let statusAluno; 
                                        let formulario;

                                        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                            console.log('e necessario digitar um numero');
                                        }
                                        if (media >= 50 && media <= 69){
                                            entradaDados.question('Digite sua nota no exame \n', function (exam){
                                                exame = exam;
                                                statusAluno = calcularMedia(nota1, nota2, nota3, nota4, nomeAlu, exame, media)
                                                formulario = montarRelatorio(nomeAluno, media, statusAluno, generoAluno, nomeProfessor, generoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, exame)
                                            }); 
                                        } else{
                                            statusAluno = calcularMedia(nota1, nota2, nota3, nota4, nomeAlu, exame, media)
                                            formulario = montarRelatorio(nomeAluno, media, statusAluno, generoAluno, nomeProfessor, generoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, exame)
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

