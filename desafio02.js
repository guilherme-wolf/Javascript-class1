/*const company = {
    Name : 'Rocketseat' , 
    Color : 'Roxo',
    Focus : 'Programação',
    Adress: {
        Street: 'st Guilherme Guembala',
        Number: 260,
    }
};

console.log (`The company ${company.Name} is located ${company.Adress.Street}, ${company.Adress.Number}`)*/

const programmer = {
    Name: 'Guilherme',
    Age: 23, 
    tecnology : [
        {name: 'Python' ,     specialty: 'Desktop'},
        {name: 'Javascript' , specialty: 'Web'},
        {name: 'ReactNative' , specialty: 'mobile'},
    ]
};

console.log(`The programmer ${programmer.Name} have ${programmer.Age} years old, and he use a tecnology ${programmer.tecnology[0].name} with speciality in ${programmer.tecnology[0].specialty}`)
