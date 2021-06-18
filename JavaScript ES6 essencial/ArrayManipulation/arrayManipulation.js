const array = [1,2,3, 'Dan'];
const array2 = new Array(4,5,6, 'Hausen');
const array3 = Array.of(7,8,9, 'Oi');

const array4 = Array(4);
const array5 = Array(4,55);

// const divs = document.querySelectorAll('div');
// const array6 = Array.from(divs);

console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
console.log('\n');


console.log(array.push('Azul')); // Retorna o tamanho do array
console.log(array);
console.log(array.pop()); // Retorna o elemento que foi removido (do final)
console.log(array);
console.log(array.unshift('Vermelho')); // Retorna o tamanho do array 
console.log(array);
console.log(array.shift()); // Retorna o elemento removido (do inicio)
console.log(array);


console.log('\n');
const arrayConcat = array.concat(array2); // Serve para concatenar dois arrays
console.log(arrayConcat);
console.log(arrayConcat.slice(0,3)); // Vai retornar do indice 0 ao 2, não retorna o inidice final, que no caso é o 3.
console.log(arrayConcat.slice(2)); // Vai retornar a partir do indice 2
console.log(arrayConcat.slice(-1)); // Vai retornar a partir do indice -1
console.log(arrayConcat.slice(-3)); // Vai retornar a partir do indice -3


console.log('\n');
console.log(arrayConcat.splice(2)); //Diferente do slice que é imutavel, o splice irá alterar o array de acordo com o especificado. Irá retornar os valores que foram removidos.
console.log(arrayConcat);
arrayConcat.splice(2, 0, 'Fui adicionado'); // O primeiro parametro é para especificar o indice inicial, o segundo parametro é para dizer quantos elementos quero remover (no caso foram 0), e no terceiro parametro é para dizer o que quero adicionar a partir do indice inicial selecionado no primeiro parametro.
console.log(arrayConcat);

