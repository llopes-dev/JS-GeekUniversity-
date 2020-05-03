// Criar funções com parametro de entrada e retorno

function calcular_idade(ano_nascimento){
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

let ret = calcular_idade(1998);
console.log()

function imprime_valores(num1 , num2){
    for(let i in arguments){
        console.log(arguments[1]);
    }
}

imprime_valores(4 ,6);