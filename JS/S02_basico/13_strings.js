
let umaString = `Um "texto"`;
console.log(umaString);
console.log(umaString[5]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em', ' um', ' lindo', ' dia'));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('tex'));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/));

let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(outraString.replace(/r/g, '#'));
console.log(outraString.length);
console.log(outraString.slice(2, 6));
console.log(outraString.slice(-3));
console.log(outraString.split('r'));
console.log(outraString.split(' '));
console.log(outraString.split(' ', 2));

