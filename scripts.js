const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector (".MascaraForm")

function  mostrarFrom(){
    
    form.style.left = "50%"
    form.style.transform = "translateX (-50%)"
    mascara.style.visibility = "visible"

}
function  esconderFrom (){
    form.style.left = "-300"
    form.style.transform = "translateX (0%)"
    mascara.style.visibility = "hidden"
    



}