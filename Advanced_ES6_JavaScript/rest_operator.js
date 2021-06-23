// Rest Operator e Spread operator
// Funciona em Strings, Arrays, Objetos e Objetos Iteraveis

const multiply = (...args) => {
    args.reduce((acc, value) => acc * value, 1);
}

const sum = (...rest) => {
    return multiply(...rest);
}

console.log(sum(7,5,5,9,6,2)); 


const array = [1,2,3,4,5];
const arrayClone = [...array];