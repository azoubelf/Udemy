const pessoa1 = {
    nome: 'Filipe',
    sobrenome: 'Azoubel',
    idade: 30,

    fala() {
        console.log(`Olá, meu nome é ${this.nome}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const novaPessoa1 = criaPessoa('Juan', 'Montoya', 50);
const novaPessoa2 = criaPessoa('Tobias', 'Pacheco', 231);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa1.fala());
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);

console.log(novaPessoa1);
console.log(novaPessoa1.sobrenome);
console.log(novaPessoa2);