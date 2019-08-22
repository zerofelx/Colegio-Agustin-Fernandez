function header(link1998, textoLink1998, link2006, textoLink2006, link2011, textoLink2011, link2015, textoLink2015) {
    const menu = document.getElementById('menu');

    menu.innerHTML = headerHTML(link1998, textoLink1998, link2006, textoLink2006, link2011, textoLink2011, link2015, textoLink2015)
}

function headerHTML(link1998, textoLink1998, link2006, textoLink2006, link2011, textoLink2011, link2015, textoLink2015) {
    return `
    <a href="` + link1998 + `" class="link">` + textoLink1998 + `</a>
    <a href="` + link2006 + `" class="link">` + textoLink2006 + `</a>
    <a href="` + link2011 + `" class="link">` + textoLink2011 + `</a>
    <a href="` + link2015 + `" class="link">` + textoLink2015 + `</a>
    `
}