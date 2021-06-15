function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here';
}

//Funções tambem sao objetos
fn.prop = 'Posso criar Propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funcoes
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //Executara a funcao fn
handleFnExecution(); //Nao executara a funcao fn

//controlFnExec como funcao
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}