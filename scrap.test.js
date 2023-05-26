const {getParsedBody, delay} = require('./scrap')
const {test, expect} = require('@jest/globals')

test('teste: getParsedBody function', ()=>{
    const input = 'https://brandmark.io/logo-rank/'
    const img = 'accy.png'
    const func = getParsedBody(input, img)
    const expected = [ '100', '80', '80', '87' ]
    delay(20000).then(expect(func).toEqual(expected))
})


