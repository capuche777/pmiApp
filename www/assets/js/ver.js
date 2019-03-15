let encuestas = []

/**
 * Si existen datos en el localStorage los toma para crear el objeto
 */
if ( localStorage.getItem('encuestas') ) {
    encuestas = JSON.parse(localStorage.getItem('encuestas'))
}


/**
 * Con los datos en el local storage imprime en pantalla
 */
( () => {
    let html = ''
    for ( const i in encuestas ) {
        
    
        html += `
            <h2>Cliente ${parseInt(i)+1}</h2>
            <h4>Codigo</h4>
            <p>${encuestas[i]['cliente']}</p>
            <h4>Venta en Lempiras</h4>
            <p>${encuestas[i]['ventas']}</p>
            <h4>Latitud</h4>
            <p>${encuestas[i]['latitud']}</p>
            <h4>Longitud</h4>
            <p>${encuestas[i]['longitud']}</p>
            <h4>Exactitud</h4>
            <p>${encuestas[i]['exactitud']}</p>
            <hr>
        `
    }

    document.querySelector('.container').innerHTML = html
} )();
