type aluno = {
    nome: string,
    cursos: string[],
    idade: number
}

const alunos: aluno[] = [
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

]

alunos.push({
    nome: "Tatiana",
    cursos: ['Arquitetura'],
    idade: 29
});

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}