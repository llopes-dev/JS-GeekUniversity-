// Objeto vs Json

/**
 * Json - Javascript Object Notation
 */

 const curso = {
   nome: 'Programação em JS',
   horas: 27,
   preco(){
     return this.horas * 0.67
   }
 }

//  console.log(curso);
//  console.log(curso.preco);
//  console.log(typeof(curso))

// Convertendo o objeto JS para JSon

const json = JSON.stringify(curso);
// console.log(json); // JSON
// console.log(typeof(json));

// Convertendo de Json para JS
const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof(obj));





