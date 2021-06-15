global.name = 'Nome no contexto de criacao';

const getNameArrowFn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execucao',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
