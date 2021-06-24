const uniqueId = Symbol();
const array = [1,2,3,4,5];
const iterator = array[Symbol.iterator]();

while(true) {
    let {value, done} = iterator.next();
    console.log(value);
    if(done){
        break;
    }
}

Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = {
    [Symbol.iterator](){}
};