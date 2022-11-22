const nome = 'Filipe';
const outroNome = 'Maria';
const terceiroNome = `João`;

// Os dois são number
const num1 = 10;
const num2 = 10.52;

let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> Não aponta para local nenhum na memória

const boolean = false; // Verdadeiro ou Falso (Lógico)

console.log(typeof(nome));
console.log(typeof(outroNome));
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(nomeAluno));
console.log(typeof(sobrenomeAluno));

// Dados primitivos
let a2 = 2;
let b2 = a2;

console.log(`a: ${a2}`);
console.log(`b: ${b2}`);

a2 = 3;

console.log(`a: ${a2}`);
console.log(`b: ${b2}`);

// Dados passados por referência
const a = [ 1, 2 ]
const b = a

console.log(`a: ${a}`);
console.log(`b: ${b}`);

b.push(3)

console.log(`a: ${a}`);
console.log(`b: ${b}`);
