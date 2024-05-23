var texto = "Matheus Cardoso"
var  textoElemento = document.querySelector(".nome");
var atraso = 200;
var contador = 0;
function escreverTexto(){
    if(contador < texto.length){
        textoElemento.textContent += texto.charAt(contador)
        contador++;
        setTimeout(escreverTexto, atraso)
    }
}

escreverTexto();