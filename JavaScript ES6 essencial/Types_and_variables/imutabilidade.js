// Exemplo 1
const user = {
    name: 'Daniel',
    lastName: 'Nordhausen'
};

function getUserFullName(user) {
    return{
        ...user, //Spread operator
        fullName: `${user.name} ${user.lastName}` //Usando string literal
    }
}

const userWithFullName = getUserFullName(user);
console.log(userWithFullName);


// Exemplo 2
const students = [
    {
        name: 'Ana',
        grade: 10
    },
    {
        name: 'Daniel',
        grade: 5
    },
    {
        name: 'Mônica',
        grade: 9
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);