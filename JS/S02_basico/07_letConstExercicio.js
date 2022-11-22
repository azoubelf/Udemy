const nome = 'Filipe';
const sobrenome = 'Azoubel';
const idade = 30;
const peso = 100;
const altura = 1.73;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, pesa ${peso}kg`);
console.log(`Tem ${altura}m de altura e seu imc é de ${imc.toFixed(2)}. Nasceu em ${anoNascimento}`);