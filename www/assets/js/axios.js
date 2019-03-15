const getToken = () => {
    if ( localStorage.getItem('token') ) {
        return localStorage.getItem('token')
    } else {
        return ''
    }
}

axios.defaults.baseURL = 'https://pmi.jeremiasenriquez.com/api/'
axios.defaults.headers.common['Authorization'] = getToken()
axios.defaults.headers.post['Content-Type'] = 'application/json'


