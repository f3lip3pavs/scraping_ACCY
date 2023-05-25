const {getParsedBody} = require('./scrap')
const {test, expect} = require('@jest/globals')

test('teste: getParsedBody function', ()=>{
    const input = 'https://brandmark.io/logo-rank/'
    const func = getParsedBody(input)
    const expected = []
    expect(func).toEqual(expected)
})


