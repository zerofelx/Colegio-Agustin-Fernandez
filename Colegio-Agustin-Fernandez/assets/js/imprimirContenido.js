function imprimirContenido(año) {
    const main = document.getElementById('main');

    main.innerHTML = switchAños(año)
}

function switchAños(año) {
    switch(año) {
        case 'Inicio':
            var contenido = Inicio();
            return contenido
        case '1998':
            var contenido = años1998_2005();
            return contenido
        case '2006':
            var contenido = años2006_2010();
            return contenido
        case '2011':
            var contenido = años2011_2015();
            return contenido
        case '2016':
            var contenido = años2016_2019();
            return contenido
    }
}


function imprimirInicio() {
    const main = document.getElementById('main')

    main.innerHTML = Inicio()
}

imprimirInicio()