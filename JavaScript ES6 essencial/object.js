let user = {
    name: 'Dan',
};

user.name = 'Ana';
user['name'] = 'Mônica';

const prop = 'name';
user[prop] = 'Nero';

user.lastName = 'Hausen';

//delete user.name;

//Recupera as chaves de um objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays
console.log('\nLista de propriedades e valores do objeto user: ', Object.entries(user));

//mergear propriedades de objetos
Object.assign(user, {fullname: 'Dan Hausen'});
console.log('\nAdicionado fullname no objeto user: ', user);
console.log('\nRetorna um objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 25}));

//Previni todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterações: ', newObj);

//Permite apenas as alterações das propriedades existentes em um objeto
const person = {name: 'Daniel'};
Object.seal(person);