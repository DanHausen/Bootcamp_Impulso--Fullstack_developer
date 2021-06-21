// Lazy evaluation
function randomNum(){
    return Math.random() * 10;
}
console.log(randomNum());


function multiply(a, b = randomNum().toFixed(2)) {
    //b = typeof b === 'undefined' ? 1 : b;
    return `${a} * ${b} : ${a * b}`;
}
console.log(multiply(2, undefined));