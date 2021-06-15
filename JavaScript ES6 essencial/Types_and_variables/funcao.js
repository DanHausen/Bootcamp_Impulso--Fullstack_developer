function getName(){
    return "Dan Hausen";
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);