// Criando objeto através de uma factory function

const pessoa1 = (nome, sobrenome) => {
  return{
      andar:() => console.log(`${nome} ${sobrenome} está andando ...`)
  }
}

const p1 = pessoa1('Flavia' , 'Sampaio');
// console.log(p1);
// console.log(typeof(p1));
p1.andar();

// ----------------------------------------- //

// Criando Objeto Através de uma função construtora

function Pessoa2(nome , sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.andar = function(){
    console.log(`${this.nome} ${this.sobrenome} está andando ...`)
  }
}

const p2 = new Pessoa2 ('Leandro' , 'Lopes');
console.log(p2);
console.log(typeof(p2));
p2.andar();