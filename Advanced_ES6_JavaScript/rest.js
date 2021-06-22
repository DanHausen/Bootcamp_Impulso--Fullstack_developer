function sum(a,b){
    console.log(arguments);
    var value = 0;
    for (var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}
console.log(sum(7,5,5,9,6,2)); 