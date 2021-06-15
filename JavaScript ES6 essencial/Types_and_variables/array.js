const users = ['Dan', 'Ana', 'Monica'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('WOMAN')
}

const persons= [
    {
        name: 'Dan',
        age: 77,
        gender: gender.MAN
    },
    {
        name: 'Ana',
        age: 31,
        gender: gender.WOMAN
    },
    {
        name: 'Monica',
        age: 12,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de items de um array
console.log('Quantidade de item do array: ', persons.length);

//Verificar se é array
console.log('A variavel persons é um array: ', Array.isArray(persons));

//Iterar os items do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS';
    return person;
});
console.log('\nPessoas com a adição do course: ', personsWithCourse);

//Transformar o array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
},0);
console.log('\nSoma de idades das pessoas: ', totalAge);

//Juntando operações
const totalEvenAges = persons.filter((person) => person.age % 2 === 0).reduce((age, person) =>{
    age += person.age;
    return age;
},0);
console.log('\nSoma da idade de pessoas que possuem a idade par: ', totalEvenAges);