/*
Let tem escopo de bloco { ... bloco }
Var só tem escopo de função
*/

const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
	let nome = 'Otávio';	// Criando
	var nome2 = 'Rogério';	// Redeclarando

	if (verdadeira) {
		var nome2 = 'Ronaldo'; // Redeclarando
		let nome = 'Outra coisa';
	}
}

console.log(nome, nome2);


function falaOi() {
	if (verdadeira) {
		let nome = 'Luizzz';
		var sobrenome = 'Miranda';
	}
	console.log(nome);
	console.log(sobrenome);
}

falaOi();

let sobrenome = 'Miranda';
console.log(sobrenome);