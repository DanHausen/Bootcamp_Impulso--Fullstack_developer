// No JavaScript as funções são de primeira classe, ou seja, funções podem ser passadas como parametro.

// Normal functions
function logNormal(value) { 
    console.log(value);
}
logNormal('normal');

// Anonymous functions. Só podem ser utilizadas atribuindo à uma variavel ou passando como parametro.
var logAnonymous = function (value) {
    console.log(value);
}
logAnonymous('anonymous');

// Arrow functions ('=>'). Usada para facilmente retornar um valor. Possuem os mesmos requisitos que as funções anonimas, pois também são funções anonimas.
var sum = (a,b) => a + b; 
console.log(sum(5,8));

var objectReturn = () => ({name: 'Dan'});
console.log(objectReturn());

/////
var obj = {
    showContext: function showContext(){
        console.log(this);
        setTimeout(() => {
            this.log('1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
}
obj.showContext();