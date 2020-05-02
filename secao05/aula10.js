// destructuring com array
const numeros = [1 , 3 , 5 ,7];

const [num1 , num2 , num3 , num4] = numeros;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// Podemos descartar valores
const [n1 ,  , n3 , n4] = numeros;
// console.log(n1);
// console.log(n3);
// console.log(n4);


// Podemos colocar valor default que será usado caso não haja no container




// Destruturing com Obejto

const produto = {
    nome: 'Playstation',
    valor: 1490.90
}

const {nome, valor} = produto;

console.log(nome);
console.log(valor);

console.log(`${soma} custa ${valor}`);