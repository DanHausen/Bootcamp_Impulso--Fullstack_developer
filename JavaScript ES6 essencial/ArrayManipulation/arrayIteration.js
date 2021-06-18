const array = [5,7,8,7,10,11,12];
const arrayFlat = [1,2,3,[55,88,99]];

array.forEach((value, i) => {
    console.log(`${i}: ${value}`);
}); //foreach serve somente para iterar os elementos do array, ele nao retorna um novo array como o map
console.log('\n');
console.log(array.map((number, i) => `${i}: ${number}`)); // Ele retorna um novo array e não altera o array original
console.log(arrayFlat.flat()); // Gera um novo array com os valores do array original, mas na mesma profundidade

console.log('\n');
console.log(array);
console.log(array.flatMap(value => [value * 2]));
console.log(array.flatMap(value => [[value * 2]]));

console.log('\n');
const arrayIteratorKeys = array.keys();
console.log(arrayIteratorKeys.next());
console.log(arrayIteratorKeys.next());

console.log('\n');
const arrayIteratorValues = array.values();
console.log(arrayIteratorValues.next());
console.log(arrayIteratorValues.next());

console.log('\n');
const arrayIteratorEntries = array.entries();
console.log(arrayIteratorEntries.next());
console.log(arrayIteratorEntries.next());

console.log('\n');
const fristGreaterThanTen = array.find(value => value > 10);
console.log(fristGreaterThanTen);

console.log('\n');
const fristIndexGreaterThanTen = array.findIndex(value => value > 10);
console.log(fristIndexGreaterThanTen);

console.log('\n');
const allValuesGreaterThanSeven = array.filter(value => value > 7);
console.log(allValuesGreaterThanSeven);

console.log('\n');
const firstIndexOfItem = array.indexOf(7);
console.log(firstIndexOfItem);

console.log('\n');
const lastIndexOfItem = array.lastIndexOf(7);
console.log(lastIndexOfItem);

console.log('\n');
const hasItem = array.includes(22);
console.log(hasItem);

console.log('\n');
const hasSomeEvenNumber = array.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

console.log('\n');
const allEvenNumbers = array.every(value => value % 2 === 0);
console.log(allEvenNumbers);

console.log('\n');
console.log(array.sort());
console.log(array.reverse());
console.log(array.join('-'));
console.log(array.reduce((total, value) => total + value,0)); 
