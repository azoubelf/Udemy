let num1 = 1500;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2));  //  Binário

let num3 = 10.9438294892384923;

console.log(num3.toFixed(2));
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num3));
console.log(Number.isNaN('aa'));

let num4 = 0.7;
let num5 = 0.1;

console.log(num4 + num5);

num4 += num5;
num4 += num5;
num4 += num5;

console.log(num4);

num4 = parseFloat(num4.toFixed(2));
console.log(num4);
console.log(Number.isInteger(num4));

console.log(100 / 0);