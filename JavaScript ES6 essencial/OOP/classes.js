//Simplificacao da heranca de propsitos
//palavra chave é 'class'

class Animal{
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal{
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pastorAlemao = new Cachorro(true);
console.log(pastorAlemao);