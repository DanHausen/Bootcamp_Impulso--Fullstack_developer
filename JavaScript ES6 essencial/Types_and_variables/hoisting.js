//Hoisting de variaveis
function fnV(){
    console.log(text);
    var text = 'Exemplo';
    console.log(text);
}

fnF();


//Hoisting de funcoes
function fnF(){
    log('Hoisting de funcao');
    function log(value){
        console.log(value);
    }
}

fnV();