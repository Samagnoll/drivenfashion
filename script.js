axios.defaults.headers.common['Authorization'] = 'cIpJeTPomCURrlfO3AZDaq4f';

let selecionarModelo = '';
let selecionarGola = '';
let selecionarTecido = '';
let inputValue = '';


let nome = prompt("Digite seu nome");
//console.log(nome)


let postagens = [
    {}

];
//console.log(postagens[0].criadores)


function renderizarPostagem(){
   //pegar no html
    const postagem = document.querySelector(".ultimos-pedidos");
    postagem.innerHTML = '';
   //percorrer a lista array

   for(let i = 0; i < postagens.length; i++){

   //pegar elemento por elemento 
    let postagemTotal = postagens[i];
    console.log(postagemTotal)
   //criar um novo elemento e add no meu elemento
   postagem.innerHTML += `
    <div class="pedido1">
          <img class="foto-blusa" src="Blusa1.png">
          <p class="criadores"><strong>Criador:</strong>Agata</p>
    </div>
       
    <div class="pedido2">
          <img class="foto-blusa" src="Blusa2.png">
          <p class="criadores"><strong>Criador:</strong>Camila</p>
    </div>
       
    <div class="pedido3">
          <img class="foto-blusa" src="Blusa3.png">
          <p class="criadores"><strong>Criador:</strong>Daniel</p>
    </div>

    <div class="pedido5">
            <img class="foto-blusa"src=${inputValue}>
            <p class="criadores"><strong>Criador:</strong>${nome}</p>
    </div>
   `;
   }

}

function adicionarNovaPostagem(){
    //pegar os dados que foram digitados pelo usuario em inputs
    let campoLink = inputValue;
    let campoNome = nome;
    console.log(campoLink)
    console.log(campoNome)

    //criar um novo objeto com os dados das postagem
    let novaPostagem = [
    {
        imagem:campoLink, 
        criadores: campoNome
    }
];
    console.log(novaPostagem)
    //adicionar uma nova postagem
     postagens.push(novaPostagem)

   //2- enviar a nova postagem para o servidor
   const promise = axios.post(' https://mock-api.driven.com.br/api/v4/shirts-api/shirts', novaPostagem)

   promise.then(sucesso);
   promise.catch(deuerro)
    console.log(sucesso)
   }

   function sucesso(resposta){
    console.log('deu bom')
    console.log('resposta')
    } 

function deuerro(error){
    console.log('deu ruim')
}


 

function habilitarBotão(){
    if(selecionarModelo !== '' && selecionarGola !== '' && selecionarTecido !== '' && inputValue !== ''){
                    const habilitarbotao = document.querySelector('.selecionar-pedido')
                     habilitarbotao.classList.add('selecionar-pedido2')
                     console.log(habilitarbotao)
    }
}

function pegarLink(){
     inputValue = (".input-text")
     inputValue = document.getElementById("myText").value;
     habilitarBotão()
     //console.log(inputValue);
}

function selecionarBlusa(selector){

    selecionarModelo = selector.innerHTML;
    //console.log(selecionarModelo)

    const botaoQueFoiSelecionadoAnteriormente = document.querySelector('.escolhermodelo .selecionado');
    if(botaoQueFoiSelecionadoAnteriormente !== null){
        botaoQueFoiSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const botao = document.querySelector(selector);
    botao.classList.add('selecionado')
    let titulo = botao.querySelector('.escrito-baixo').innerHTML;
    habilitarBotão()
    //console.log(titulo)
}

function selecionarGolas(selector){

    selecionarGola = selector.innerHTML;
    //console.log(selecionarGola)

    const botaoQueFoiSelecionadoAnteriormente = document.querySelector('.escolhergola .selecionado');
    if(botaoQueFoiSelecionadoAnteriormente !== null){
        botaoQueFoiSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const botao = document.querySelector(selector);
    botao.classList.add('selecionado')
    let titulo = botao.querySelector('.escrito-baixo').innerHTML;
    habilitarBotão()
    //console.log(titulo)
}

function selecionarTecidos(selector){

    selecionarTecido = selector.innerHTML;
    //console.log(selecionarTecido)

    const botaoQueFoiSelecionadoAnteriormente = document.querySelector('.escolhertecido .selecionado');
    if(botaoQueFoiSelecionadoAnteriormente !== null){
        botaoQueFoiSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const botao = document.querySelector(selector);
    botao.classList.add('selecionado')
    let titulo = botao.querySelector('.escrito-baixo').innerHTML;
    habilitarBotão()
    //console.log(titulo)
}
pegarLink()
habilitarBotão()
renderizarPostagem()
adicionarNovaPostagem()