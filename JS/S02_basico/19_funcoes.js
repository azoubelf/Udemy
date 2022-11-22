function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}

function funcaoRetorno(nome) {
    return `Bom dia, ${nome}`;
}

function soma(x = 1, y = 1) {
    return x + y;
}



saudacao('João');
saudacao('Maria');
saudacao('Filipe');

let saudacaoRetorno = funcaoRetorno('Ana');
console.log(saudacaoRetorno);

console.log(soma(2, 2));
console.log(soma(2, 4));
console.log(soma(2));
console.log(soma());

let somaRetornada = soma(3, 4);
let somaStrings = soma('Filipe ', 'Azoubel');
console.log(somaRetornada);
console.log(somaStrings);

// Função anônima
const raiz = function(numero) {
    return numero ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(99));

// Arrow function
const raizArrow1 = (n) => {
    return n ** 0.5;
};

const raizArrow2 = n => n ** 0.5;

console.log(raizArrow1(9));
console.log(raizArrow2(9));