function tocaSomAplausos(){
    document.querySelector('#som_tecla_aplausos').play();
}
document.querySelector('.tecla_aplausos').onclick = tocaSomAplausos;

const listaDeTeclas = document.querySelectorAll(".tecla");
//criar a variavel de contagem
let contador = 0;
//laço de repetição while
while(contador < 9){
listaDeTeclas[contador].onclick = tocaSomAplausos;
contador = contador + 1;
console.log (contador);
}