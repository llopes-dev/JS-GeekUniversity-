// tratar exceções

// console.log(nome); // ReferenceError

try{
    console.log(nome);
}catch(e){
    console.log("Não é possível imprimir nome.")
}

function dividir (num1 , num2){
    if(num1 === 0 || num2 ===0){
        throw("Os valores devem ser positivos"); // lançamento uma exceção (erro)
    }else{
        return num1 / num2;
    }
}

try{
    let ret = dividir(8 , 2);
    console.lor(ret);
}catch(e){
    console.log("Não foi possível dividir.")
}finally{
    console.log("Vamos continuar ...")
}