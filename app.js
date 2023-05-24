// Global variables

const url = `https://accy.com.br`

//http request

try {
    const req = fetch(url)
    console.log(req)

} catch (error) {
    console.log('não foi possivel conectar com o endpoint: ' + url )
}



