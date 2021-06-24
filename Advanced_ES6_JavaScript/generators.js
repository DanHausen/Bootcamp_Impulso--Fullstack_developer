function* hello(){
    console.log('Oi');
    yield 1;
    
    console.log('Oi2');
    const value = yield 2;
    
    console.log(value);    
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside of function'));

//////////////

function* naturalNumbers(){
    let n = 0;
    while (true) {
        yield n;
        n++;
    }
}

const nat = naturalNumbers();
console.log(nat.next());
console.log(nat.next());
console.log(nat.next());

//////////////

const obj = {
    values: [1, 2, 3],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for(let value in obj){
    console.log(value);
}