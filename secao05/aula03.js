var cursos = [
    'Porgramação',
    'Algoritmos',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Web com Django Framwork',
    'Programação em JS',
];

// console.log(cursos);
// console.log(cursos.length);

// definir uma função
function imprimir(curso , indice){
    console.log(indice + ' - ' + curso )
}

// para cada
cursos.forEach(imprimir);


// utilização de uma função anônima (lambda / callback) e template string

cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`)
})