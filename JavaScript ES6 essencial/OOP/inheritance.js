'use strict';

function Animal(qtdePatas){}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}


function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log("Latiu");
}

const pug = new Cachorro(false);
const pastorAlemao = new Cachorro(true);

///////

class Person {
    constructor(name){
        this.name = name;
    }
}

class PessoaF extends Person {
    constructor(name, cpf){
        super(name);
        this.cpf = cpf;
    }
}