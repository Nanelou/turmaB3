//criando a função tocaSomAplausos e buscando a id da tecla para tocar.
function tocaSom(idElementoaudio){
    document.querySelector(idElementoaudio).play();
}
//referencia constante listaDeTeclas que busca todas as classes tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//laço de repetição While trocado pelo "for"  tecla, efeito, idAudio e função tocaSom
for(let contador = 0; contador < listaDeTeclas.length; contador = contador + 1){
    const tecla = listaDeTeclas[contador];
//chamada para tocar o som pelo índice do elemento da lista
const efeito = tecla.classList[1]; //busca do item 1 dos botões
const idAudio = '#som_${efeito}'; //uso do template string
tecla.onclick = function(){ //função anônima
tocaSom ("idAudio");
}
//console.log (contador);
}

