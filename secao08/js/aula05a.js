let btn = document.querySelector('button');

btn.onclick = function(){
  // declara a variavel de texto que será adicionada no paragrafo
  let textElement = "";

  // recupera o valor do input
  let inputValue = document.querySelector('input').value;

  // Cria um elemento paragrafo
  let pElement = document.createElement('p');

  // Adiciona o atributo class no paragrafo
  pElement.setAttribute('class' , 'classe-p');

  // Verifica se o usuário preenheu o input, caso contrário coloca um texto
  if(inputValue !== ""){
    textElement = document.createTextNode(inputValue);
  }else{
    textElement = document.createTextNode('veio vazio ...')
  }

  // Adiciona um texto como filho do parágrafo
  pElement.appendChild(textElement);

  // Recupera a div
  let divElement = document.querySelector('#app');

  // Adiciona o paragrafo como filho da div
  divElement.appendChild(pElement);

  // limpa o input
  document.querySelector('input').value = '';

}