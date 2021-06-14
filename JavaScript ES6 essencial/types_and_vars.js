// string
// number
// boolean
// null
// undefined
// symbol
// object
// function
// array

var nameVar = "Daniel";
let nameLet = "Daniel";
const nameConst = "Daniel";

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

const textSize = "Text Size".length;
console.log(`\nQuantidade de caracteres: ${textSize}`);

const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

const replacedText = 'Text'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima: ', allWithoutLastChar);

const secontToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a ultima: ', secontToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);