function method1() {
    console.log("method1 called");
}

var obj = {
    method1
};
obj.method1();

///////
var object = {
    sum(a,b){
        return a + b;
    }
};

console.log(object.sum(55,88));