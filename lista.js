const alunos = ['Gilmar'];
alunos.push('Dani');

alunos;
console.log(alunos);


const notas = [];
notas.push(8);
notas.push(8);
notas.push(8);
notas.push(8);
let soma = 0;
for (let index = 0; index < notas.length; index++) {
    soma = soma + notas[index];
}

console.log('Media : '+(soma/notas.length));