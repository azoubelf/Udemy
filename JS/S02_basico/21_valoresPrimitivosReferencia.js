/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint, symbol
    Valores copiados

Referência (mutáveis) - array, object, function
    Valores passados por referência
 */

let a = 'A';
let b = a; // Cópia

console.log(a, b);

a = 'Outra coisa';

console.log(a, b);

// ---------------------------------------- //
//  Apontam para o mesmo lugar na memória
let c = [ 1, 2, 3, 4 ];
let d = c;
let e = [...c];

console.log(c, d, e);

c.push(5);

console.log(c, d, e);
console.log(c, d, e);

d.pop();
console.log(c, d, e);

const f = {
    nome: 'Filipe',
    sobrenome: 'Azoubel'
};

const g = f;

g.nome = 'João';

console.log(f);
console.log(g);