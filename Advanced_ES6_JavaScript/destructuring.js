var array = ['Dan', 'Orange', 'Game', ['Zelda']];
var dan = array[0];
var orange = array[1];
var game = array[2];
var zelda = array[3][0];

var obj = {
    name: 'Dan'
};

// Destructuring assignment
var [dan2, orange2, game2, [zelda]] = ['Dan', 'Orange', 'Game', ['Zelda']];
console.log(dan, dan2);

var {name: name2} = obj;