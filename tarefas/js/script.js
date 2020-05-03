// Temos que referenciar o input
// Input
let input = document.querySelector("input[name=tarefa]");

// Button
let btn = document.querySelector("#botao");

// Lista
let lista = document.querySelector("#lista");

// card
let card = document.querySelector('.card');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){
        // limpar a listagem de itens antes de renderizar a novamente  a tela
        lista.innerHTML = '';

    for(tarefa of tarefas){
        // criar item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes no item da lista
        itemLista.setAttribute('class' , 'list-group-item list-group-item-action')

        // Adicionar evento de click no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        // Criar um Texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da Lista
        itemLista.appendChild(itemTexto);

        // Adicinar o item da lista na lista
        lista.appendChild(itemLista);

    }
}

renderizarTarefas();


// Precisamos escutar o evento de click no botão
btn.onclick = function(){

// Capturar o valor digitado pelo usuário no input

let novaTarefa = input.value;

if(novaTarefa !== ""){

    // Atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela

tarefas.push(novaTarefa);

renderizarTarefas();

// Limpar o Input
input.value = '';


// Limpar mensagens de erros spans
removerSpans();

// Salva os novos dados no banco de dados;
salvarDadosNoStorage();

    }else{

        // Limpar mensagens de erros spans
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class' , 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa');
        span.appendChild(msg);
        card.appendChild(span);


    }
}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    for (let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}


function deletarTarefa(tar){
    // remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent) , 1);

    // renderiza novamente a tela
    renderizarTarefas();

    // Salva os novos dados no banco de dados;
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){

    // todo navegador web possui esta capacidade
    localStorage.setItem('tarefas' , JSON.stringify(tarefas));

}
