// Pode ter vários tipos, mas não é boa prática
const alunos = ['Filipe', 'Maria', 'João', 1, true, null, 'Carlos'];
console.log(alunos);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[3] = 'Marcelo';
alunos[9] = 'Paulo'

console.log(alunos);
console.log(alunos.length);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

console.log(alunos.slice(0, -2));

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Luana';

alunos.push('Leopoldo');

alunos.unshift('Teobaldo');
alunos.unshift('Rainha');
console.log(alunos);

let removido = alunos.pop();
let removidoInicio = alunos.shift();

console.log(removido);
console.log(removidoInicio);
console.log(alunos);
console.log(alunos[99]);
console.log(typeof alunos);
console.log(alunos instanceof Array);