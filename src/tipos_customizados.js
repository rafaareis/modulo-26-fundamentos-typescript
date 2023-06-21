"use strict";
const alunos = [
    {
        nome: "Rafael de Alvarenga Reis",
        cursos: ["Front-End", "UX/UI"],
        idade: 34
    },
    {
        nome: "Courtney LaPlante",
        cursos: ["Front-End", "Python"],
        idade: 32
    },
];
alunos.push({
    nome: "Tatiana",
    cursos: ['Arquitetura'],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
