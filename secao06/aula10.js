// lexico - forma e escrita

let xuxa = 'global'; // pode ser acessada globalmente no projeto

function imprimir () {
    console.log(xuxa)
  };

  function outra () {
      let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto
      imprimir()
      console.log(xuxa)
  }

  outra();