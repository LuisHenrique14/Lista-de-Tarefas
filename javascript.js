//Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

//Temos que referenciar o button
let  btn = document.querySelector('#botao');

//Temos que referenciar a lista
let lista = document.querySelector('#lista');

//card
let card = document.querySelector('.card');

let tarefas = [
    'Jogar GTA 5',
    'Estudar Python',
    'Estudar Java Script',
    'Ver um filme',
    'Ler um livro'
];

function renderizarTarefas(){
    //limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for (tarefa of tarefas){
        //criar o intem da lista
        let itemLista = document.createElement('li');

        //adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //adicionar evento de click no list da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        //criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //adicionar o texto no item da lista 
        itemLista.appendChild(itemTexto);

        //adicionar o item da lista na lista
        lista.appendChild(itemLista);

    }
}
//Executando a função para renderizar as tarefas
renderizarTarefas();

//Precisamos 'escutar' o evento de click do botão
btn.onclick = function(){
//Precisamos capturar o valor digitado pelo usuário
    let novaTarefa = input.value;
//validar se o usuário digitou um texto válido
    if(novaTarefa !== ''){
//Precisamos atualizar a nova tarefa na lista (array) e renderizar a tela
        tarefas.push(novaTarefa);
        renderizarTarefas();
//Limpar input
        input.value = '';
        //limpando mensagens de erro (spans)
        removerSpans(); 
    }else{
        //limpando mensagens de erro (spans)
        removerSpans();
        
        let span = document.createElement('span');
        
        span.setAttribute('class', 'alert alert-warning');
        
        let msg = document.createTextNode('Você precisa informar a tarefa!')
        
        span.appendChild(msg);
        
        card.appendChild(span);

    }    
}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    

    for(let i = 0; i < spans.length; i++ ){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    //remove a tarefa do array 
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    //renderizar a tela
    renderizarTarefas();
}

