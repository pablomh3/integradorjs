const titulo = document.querySelector(".h1");
const parrafo = document.querySelector(".p")

function cambios(){
    titulo.style.background = 'yellow'
    parrafo.textContent = 'JUGÓ EL CUCHU CAMBIASSO'
}
setTimeout(cambios,3000)
