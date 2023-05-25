const puppeteer = require("puppeteer")

function delay(time) {

    return new Promise(r => setTimeout(r, time)) //r é função disparada apos a resolução da promise no then()

}

async function getParsedBody(url){
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()

    await page.goto(url)

    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click('#upload')
    ])

    await fileChooser.accept(['logo3.jpg'])

    const scrapObj = delay(5000).then(() => {    
        
        const scrapObj = []
        
        scrapObj.push(page.evaluate(() => {
        
            const containers = document.querySelectorAll('.col-md-12 .progressbar-text')
            const results = []
            
            containers.forEach(index => {

                if(index.innerHTML != undefined)
                {
                    results.push(index.innerHTML)
                    console.log('dentro do if: ' + results)
                    return results
                }
            })

            return results
        })

        ) 
        return scrapObj[0].then(res => {console.log(res)})
    })
    
}

getParsedBody('https://brandmark.io/logo-rank/')

module.exports = {getParsedBody}
