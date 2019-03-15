encuestas = []

if ( localStorage.getItem('encuestas') ) {
    encuestas = JSON.parse(localStorage.getItem('encuestas'))
}

for ( const i in encuestas ) {
    let html = ''

    html += `
        <p>${encuestas[i]['cliente']}</p>
        <p>${encuestas[i]['ventas']}</p>
        <p>${encuestas[i]['latitud']}</p>
        <p>${encuestas[i]['longitud']}</p>
    `

    document.querySelector('.container').innerHTML = html
}