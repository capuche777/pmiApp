const getAPIToken = () => {
    axios({
        method: 'POST',
        url: `${baseURL}rest-auth/login/`,
        contentType: 'application/json',
        data: {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
    })
    .then(res => {
        if ( res['statusText'] == 'OK' ) {
            const token = res['data']['key']
            sessionStorage.setItem('token', token)

            location.href = '/questionary.html'
        }
    })
    .catch(e => {
        console.log(e)
    })
}

document.getElementById('btn_login').addEventListener('click', () => {
    getAPIToken()
})