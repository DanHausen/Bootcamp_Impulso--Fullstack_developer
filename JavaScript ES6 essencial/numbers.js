const myNum = 12.1995

const numberAsString = myNum.toString();
console.log('Número transformado em String: ', typeof numberAsString); // 'TypeOf' is used to return the type of the variable

const fixedTwoDecimals = myNum.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

console.log('\nString parseada para float: ',parseFloat('552.8'));

console.log('\nString parseada para integer: ',parseInt('55.27'));