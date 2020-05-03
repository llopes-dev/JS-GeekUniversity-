// Arrays, vetores, estruturas de dados

/**
 * array contendo 5 elementos
 * indices são as posições do elemento no array
 * [0][1][2][3][4]
 * 
 * - Possuem tamanho infinito*
 * - Podemos colocar qualquer tipo de dados
 * 
 */

 // forma 1

 var alunos = new Array('Leandro' , 'Ricardo' , 'Maria' , 'Caio')
//  console.log(alunos);

 // forma 2 - recomendada
 var notas = [1 , 3 , 5, 7 ,9]
//  console.log(notas);

 // Criando um array vazio
 var dados = [];
//  console.log(dados)

 // Acessando o valor de um indice
//  console.log(notas[2]);

 // Alterando o valor a parti do indice
 notas[2] = 12;
//  console.log(notas);

 // Anteção ao acessar um valor com um índice que não existe
 notas[9] = 10; // Não Existe
//  console.log(notas)

 if(notas[5] == undefined){
     notas[5] = 54;
 }

//  console.log(notas[5]); // undefined
//  console.log(notas[6]); // undefined
//  console.log(notas[7]); // undefined
//  console.log(notas[8]); // undefined
//  console.log(notas[9]); // 10

//  console.log(notas[5] == undefined);

// INserindo elementos ao final do array

var nomes = ['Leandro' , 'Maria' , 'Flavia']
// console.log(nomes);

nomes.push('Vanessa'); // insere o valor no final do array

// Tamanho do array
// console.log(nomes.length); // identifica o tamanho do array

var alunos = ['Vera' , 'Lucia' , 'Pedro' , 'Fernanda' , 'Mario' , 'Ana' , 'Carla']
alunos.sort();
// console.log(alunos)

var precos = [123.44 , 89.90 , 74.50 , 12.90 , 750.34];
// console.log(precos);
precos.sort(function(a,b){return a- b;}); // função lambda ou callback
// console.log(precos)

precos.sort(); // ordenação de floats não funciona assim!
// console.log(precos)

var idades = [5 , 1 , 8 , 12 , 44 ,78]
idades.sort(function(a , b){return a - b});
// console.log(idades);

idades.sort();
// console.log(idades)

// Deletando dados de um array
delete idades [3];
// console.log(idades)
idades[3] = 12;

// idades.splice(3 , 1); //A partir do indice 3, delete 1 elemento
// console.log(idades);

// idades.splice(3 , 0 , 56 , 89); // A partir do indice 3, não  delete nenhum, mas adicione 56, 89
// console.log(idades)

// idades.splice(3 , 1, 23) // A partir do indice 3, deleta 1 e adiciona 23
// console.log(idades)

for (var i = 0; i< idades.length; i++){
   // console.log(idades[i])
}


// // Removendo elementos da ultima posição do array
// idades.pop(); // remove e retorna o ultimo elemento de um array
// // console.log(idades);

// var ret = idades.pop();
// // console.log(ret);
// // console.log(idades)


// idades.shift(); // remove e retorna o primeiro elemento de um array
// console.log(idades)

// // Inserindo elemntos no inicio de um array
// idades.unshift(99);
// console.log(idades);

// var novo = idades.slice(2);
// console.log(novo)


var pares = [2 , 4, 6 ,8 , 12]
var impares = [1 , 3, 5, 7 ,9]
var rest = pares.concat(impares); // concatena os dois arrays
// console.log(rest);

rest.sort(function(a , b){ return a - b});
// console.log(rest)

var tabuleiro = [[1, 2, 3, 4] , [5 , 6, 7, 8] , [9 ,10 , 11 ,12] , [13 , 14 , 15, 16]];
// console.log(tabuleiro[0] [0]);
// console.log(tabuleiro[2] [2]);