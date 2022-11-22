let a = 'A';
let b = 'B';
let c = 'C';

const letras = [ b, c, a ];
[a, b, c ] = letras;

console.log(a, b, c);


const numeros = [ [1, 2, 3], [4, 5, 6 ], [7, 8 , 9] ];
const [ lista1, lista2, lista3, lista4 ] = numeros;

console.log(numeros);
console.log(lista1);

const restoNumeros = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
const [ n1, n2, ...resto ] = restoNumeros;

console.log(n1, n2, resto);

console.log(numeros[1][2]);