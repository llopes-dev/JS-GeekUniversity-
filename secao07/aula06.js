// Declaração de Métodos 
// Métodos são comportamentos que estamos modelando em nossas classes 

class Pessoa{

    //atributos
    constructor( nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    // metodos get (devolve o valor do atributo)
    get nome(){
        return this._nome;
    }

    // metodo set (insere valores nos atributos)
    set nome(nome){
        this._nome = nome;
    }


    get sobrenome (){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    // métodos

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`)
    }

    comer(){
        console.log(`${this.nome} está comento ...`);
    }

    beber(){
        console.log(`${this.nome}  ${this.sobrenome} está bebendo ...`);
    }


}


class Carro{
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca (){
        return this._marca;
    }

    get modelo (){
        return this._modelo;
    }

    set modelo(modelo){
        this.modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }

}

// Forma I - Instanciação de Objetos

// const curso = new Object();
// curso.nome = 'Programação e JavaScript';
// curso.preco = 27.99;
// console.log(curso);
// curso['qtd_alunos'] = 999;
// console.log(curso)
// delete curso['qtd_alunos'] 
// console.log(curso)

// Forma II - Instanciação com Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 899.99,
    fabricante: {
        nome:'Adobe',
        contato: {
            rua:'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
    filiais:[
        {cidade: 'Rio de Janeiro'},
         {cidade: 'Recife'}
        ]
    }
}
console.log(programa)
console.log(programa.nome); // Photoshop
console.log(programa.fabricante.nome); //Adobe
console.log(programa.fabricante.filiais.length); // 2 



