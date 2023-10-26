//criando a função tocaSomAplausos e buscando a id da tecla para tocar.
function tocaSom(idElementoaudio){
    document.querySelector(idElementoaudio).play();
}
//referencia constante listaDeTeclas que busca todas as classes tecla
const listaDeTeclas = document.querySelectorAll(".tecla");

//criar a variavel de contagem
let contador = 0;
//laço de repetição While com referncias efeito, idAudio e função tocaSom
while(contador < 9){
//chamada para tocar o som pelo índice do elemento da lista
const efeito = listaDeTeclas[contador].classList[1];
const idAudio = "#som_" + efeito;
listaDeTeclas[contador].onclick = function()
{tocaSom ("idAudio");}
contador = contador + 1;
console.log (contador);
}

