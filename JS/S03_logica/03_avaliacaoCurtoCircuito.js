/*
&& -> false && true -> false 'o valor mesmo'
|| -> true && false -> vai retornar 'o valo verdadeiro'
*/

function falaOi() {
	console.log('Oi');
}


let vaiExecutar = 'João';

console.log(vaiExecutar && falaOi());	

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);