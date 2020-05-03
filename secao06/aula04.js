// Funções com parametros variaveis de valor

function somar(){
    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma;
}

console.log(somar());
console.log(somar(2));