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

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
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

}

