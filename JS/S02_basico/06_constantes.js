/**
 * Não podemos criar constantes com palavras reservadas
 * Constantes precisam ter nomes significativos
 * Não podemos começar o nome de uma constante com um número
 * Não pode conter espaços ou traços
 * Utilizamos camelCase
 * Case Sensitive
 * Não podemos modificar o valor de uma constante
 * Não utilie var, utilize const
 */

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(resultado));
console.log(typeof('Teste'));
console.log(typeof('5' + 13));



