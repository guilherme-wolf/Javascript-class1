
const nome = 'Guilherme';
const peso = 65;
const altura = 1.50;


const imc = peso / (altura * altura);

if (imc >= 30 ){
    console.log (`${nome} você está acima do peso!!!`)
}if (imc < 29.9){
    console.log (`${nome} você não está acima do peso !!!`)
}

console.log (imc)


