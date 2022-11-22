// Aritméticos
// Atente para o +, pois faz soma e concatenação

const num1 = 10;
const num2 = 5;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);
console.log(`Potenciação: ${num1 ** num2}`);
console.log(`Módulo: ${num1 % num2}`);

// Precedência, em ordem
// ()
// **
// * / %
// + -
console.log(`Expressão: ${(10 + 10) * 3}`);

// Incremento e decremento
let contador = 1;
contador++;
contador++;

console.log(contador);

contador--;

console.log(contador);

let i = 1;
console.log(i++);
console.log(i);

let j = 1;
console.log(++j);
console.log(j);

let numero = 30
numero += 5;

console.log(numero);

numero *= 2;

console.log(numero);

numero = Number('5.2');
console.log(numero);
console.log(typeof numero);