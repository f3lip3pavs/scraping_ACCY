const puppeteer = require("puppeteer")

function delay(time) {

    return new Promise(r => setTimeout(r, time)) //r é função disparada apos a resolução da promise no then()

}

//recebe um arquivo de imagem e a pagina atual como parametros e envia o arquivo de imagem
async function sendFile(imgFile, actualPage){
    console.log('enviando arquivo...')
    console.log('\n-------logs--------\n')
    console.log(`imagem: ${imgFile}, pagina atual: ${actualPage}`)

    const [fileChooser] = await Promise.all([
        actualPage.waitForFileChooser(),
        actualPage.click('#upload')// possivel erro
    ])


    await fileChooser.accept([imgFile])
}

async function getData(time, actualPage){
    console.log('realizando raspagem de dados...')
    console.log('\n-------logs--------\n')

    const scrapObj = delay(time).then(async () => {    
        
        const scrapObj = []
        
        scrapObj.push(actualPage.evaluate(() => {
        console.log('rastreio 1')
            const containers = document.querySelectorAll('.col-md-12 .progressbar-text')
            console.log('referencia: ', containers)//nao esta passando por aqui
            const results = []
            console.log('rastreio 2')
            containers.forEach(index => {

                if(index.innerHTML != undefined)
                {
                    console.log('rastreio 3')
                    results.push(index.innerHTML)
                    return results
                }
            })
            console.log("resultado: ", results)
            return results
        })

        ) 
        console.log('objeto 1: ', scrapObj[0].then(res => {return res}))
        return scrapObj[0].then(res => {return res})
    })
    console.log('objeto integral 2: ', scrapObj)
    return scrapObj
}

async function getParsedBody(url, img){
    console.log('iniciando canexão para: ', url)
    console.log('\n-------logs--------\n')
    console.log('imagem: ', img)
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    console.log('pagina atual:', page)

    await page.goto(url)

    sendFile(img, page)
    console.log('arquivo sendo enviado: ', img)

    const scrapObj = getData(5000, page)
    console.log('objeto 3: ', scrapObj)

    console.log('objeto integro 4: ',scrapObj.then(res => {return res}))
    return scrapObj.then(res => {return res})
    
    
}

const teste = getParsedBody('https://brandmark.io/logo-rank/', '1685391771134-9795024.png')

teste.then(res => {console.log(res)})

module.exports = {
    getParsedBody,
    delay
    }
