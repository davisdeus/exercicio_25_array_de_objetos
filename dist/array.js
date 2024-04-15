"use strict";

var alunos = [{
  nome: "Davi",
  materia: "Ingles",
  nota: 10
}, {
  nome: "Danubia",
  materia: "Ingles",
  nota: 5
}, {
  nome: "Diego",
  materia: "Ingles",
  nota: 6
}, {
  nome: "Debora",
  materia: "Ingles",
  nota: 4
}, {
  nome: "Diana",
  materia: "Ingles",
  nota: 8
}, {
  nome: "Daniela",
  materia: "Ingles",
  nota: 9
}, {
  nome: "Dalton",
  materia: "Ingles",
  nota: 3
}, {
  nome: "Darcy",
  materia: "Ingles",
  nota: 8
}];

//Aprovados
function filtrarNotasDeAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosNotasAltas = filtrarNotasDeAprovados(alunos);
console.log("Alunos Aprovados", alunosNotasAltas);

//Reprovados
function filtrarNotasDeReprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota < 6;
  });
}
var alunosNotasBaixa = filtrarNotasDeReprovados(alunos);
console.log("Alunos Reprovados", alunosNotasBaixa);