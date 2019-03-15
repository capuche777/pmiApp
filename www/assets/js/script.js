let latitude = ''
let longitude = ''
let accuracy = ''

let encuestas = []

if ( localStorage.getItem('encuestas') ) {
    encuestas = JSON.parse(localStorage.getItem('encuestas'))
}
/**
 * Se encarga de inicializar la obtencion de coordenadas
 */
const getAgain = () => {
    navigator.geolocation.getCurrentPosition(getPosition, error, { timeout: 5000, enableHighAccuracy: true });
}


/**
 * Una vez inicializada la obtencion de cooredenadas valida que la coordenada sea menor a 12 metros de error
 * si es mayor a los 12 metros sigue buscando hasta obtener una exactitud menor
 * @param {*} position 
 */
const getPosition = position => {

    accuracy = position.coords.accuracy
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    if ( accuracy > 12 ) {
        getAgain()
    } else {
        const encuesta = {
            cliente: document.getElementById('cod_cliente').value,
            ventas: document.getElementById('total_ventas').value,
            latitud: latitude,
            longitud: longitude,
            exactitud: accuracy,
        }
        encuestas.push(encuesta)
        localStorage.setItem('encuestas', JSON.stringify(encuestas))
        location.reload()
    }

}


/**
 * Si existe error en la obtencion de las coordenadas se ejecutanuevamente hasta obtener el resultado
 * @param {*} e 
 */
const error = e => {
    getAgain()
}


/**
 * Al dar clic en el boton obtener, inicia la obtencion de coordenadas hasta encontrar la coordenada deseada
 */
document.getElementById('btn_send').addEventListener('click', () => {
    document.getElementById('loading_gps').innerHTML = `
    <button class="btn btn-warning btn-block btn-lg" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Calibrando GPS...
    </button>
    `
    getAgain()
}) 


