/***********************************************************************************************
 *  Objetivo: Criação de uma função para relatório do aluno com média e situação no curso 
 *  Data: 04/08/2022
 *  Autora: Isabelle
 *  Versão: 1.0
 **********************************************************************************************/


const calcularExame = (media, notaExame) => (parseFloat(media) + parseFloat(notaExame))/2

const calcMedia = (nota1, nota2, nota3, nota4) => (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4

const calcularMedia = function(nota1, nota2, nota3, nota4, nomeAluno, exame, media)

{
    let valor1 = nota1;
    let valor2 = nota2;
    let valor3 = nota3;
    let valor4 = nota4;
    let nomeAlu = nomeAluno;
    let statusAluno;
    let mediax = media;
    let notaExame = exame;


    if (nomeAlu == '') {
        console.log('nome do estudante deve ser informado');
        exit();
    } else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('a nota do estudante deve ser informada');
        exit();
    }else { 
        mediax = calcMedia(valor1, valor2, valor3, valor4)
        if (mediax >= 70) {
            statusAluno = 'Aprovado';
        } else if (mediax >= 50 && mediax <= 69){
            let media2 = calcularExame(mediax, notaExame);
            if(media2 > 59){
                statusAluno = 'aprovado';
            } else{
                statusAluno = 'reprovado'
            }
    } else{
        statusAluno = 'Reprovado';
    }
    }
    return statusAluno;
}

const montarRelatorio = function (nomeAluno, media, statusAluno, generoAluno, nomeProfessor, generoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, exame)
{
    let nomeAlu = nomeAluno;
    let media1 = media;
    let statusAlu = statusAluno;
    let generoAlu = generoAluno.toLowerCase();
    let nomeProf = nomeProfessor;
    let generoProf = generoProfessor.toLowerCase();
    let nomeCur = nomeCurso;
    let nomeDisc = nomeDisciplina;
    let valor1 = nota1;
    let valor2 = nota2;
    let valor3 = nota3;
    let valor4 = nota4;
    let exam = exame;

    let notaExame = calcularExame (media, exam)

    console.log('O estudante ' + nomeAlu + ' foi ' + statusAlu + ' na disciplina ' + nomeDisc);
        if (generoAlu == 'feminino'){
            console.log('Aluna: ' + nomeAlu);
        } else if (generoAlu == 'masculino'){
            console.log('Aluno: ' + nomeAlu);
        }else
            console.log('E preciso informar o pronome do estudante');
    console.log ('Curso: ' + nomeCur);
    console.log('Professor: ' + nomeProf);
        if(generoProf == 'feminino'){
            console.log('Nome da professora: ' + nomeProf);
        } else if (generoProf == 'masculino'){
            console.log('Nome do professor: ' + nomeProf);
        }else 
            console.log('E preciso informar o pronome do docente');
    console.log ('Notas do estudante ' + valor1 + ' ' + valor2 + ' ' + valor3 + ' ' + valor4);
    console.log ('Media final ' + media1);

    if(exam != 0){
        console.log ('Media final exame ' + notaExame);
    }
    
}

module.exports = {
    calcularMedia,
    montarRelatorio,
    calcularExame,
    calcMedia
}
