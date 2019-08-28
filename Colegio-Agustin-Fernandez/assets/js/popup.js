function popup(imagen) {
    var contenedorPopup = document.getElementById('contenedorPopup')
    var divImagen = document.getElementById('imagenPopup')

    contenedorPopup.classList.remove('oculto')
    contenedorPopup.classList.add('animacion')
    divImagen.innerHTML = img(imagen)
}

function img(imagen) {
    return `
    <img onclick="cerrar()" src="${imagen}" alt="ImagenPopup">
    `
}

function cerrar() {
    var contenedorPopup = document.getElementById('contenedorPopup');


    contenedorPopup.classList.remove('animacion')
    contenedorPopup.classList.add('oculto')
    divImagen.innerHTML = "";
}