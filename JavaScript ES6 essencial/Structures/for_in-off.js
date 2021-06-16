let arr = [3,5,7,9];
arr.foo = "Hallo";

for(let i in arr){
    console.log(i);     //"0","1","2","3", "foo"
}

for(let i of arr){
    console.log(i);     //"3", "5", "7", "9"
}