//Para tornar uma variavel privada devemos usar o '#' antes de seu nome

function Person(initialName){
    let name = initialName;
    this.getName = function(){
        return name;
    }
    
    this.setName = function(newName){
        name = newName;
    }
}

const p = new Person('Daniel');
console.log(p);
console.log(p.getName());
console.log(p.name);
p.setName('Ana');
console.log(p.getName());