// utilizamos o map par realizar transformação em um array

var valores = [2 , 4 ,6 ,8 ,10]

var dobro = valores.map(function(valor){
    return valor * 2;
})

console.log(dobro)

function dobrar(valor){
    return valor *2;
}

dobro = valores.map(dobrar);
console.log(dobro)