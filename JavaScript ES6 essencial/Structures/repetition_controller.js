//break
console.log("Break exemplo");

var i = 0;
while(true) {
    i++;
    if(i > 2){
        break;
    }
    console.log(i);
}

//continue
console.log("\nContinue exemplo");
const array = [1,2,3,4,5,6];

for(let j = 0; j < array.length; j++) {
    const element = array[j];
    if(element % 2 === 0){
        continue;
    }
    console.log(element);
}