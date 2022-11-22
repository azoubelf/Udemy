/*
Operadores Lógicos

&&  -   and -   #
||  -   or  -   ou
!   -   not -   não

*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || false;

console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'joao';
const senha = '1234';

const vaiLogar = usuario === 'joao' && senha === '1234';

console.log(vaiLogar);
console.log(!!true);
