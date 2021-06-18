const array = [5,7,8,9,10,11,12];
const arrayFlat = [1,2,3,[55,88,99]];

array.forEach((value, i) => {
    console.log(`${i}: ${value}`);
}); //foreach serve somente para iterar os elementos do array, ele nao retorna um novo array como o map

console.log(array.map((number, i) => `${i}: ${number}`)); // Ele retorna um novo array e não altera o array original

console.log(arrayFlat.flat()); // Gera um novo array com os valores do array original, mas na mesma profundidade

