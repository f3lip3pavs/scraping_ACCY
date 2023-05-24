const {getParsedBody} = require('./scrap')
const {test, expect} = require('@jest/globals')

// import {getParsedBody} from './scrap'
// import {test, expect} from 'jest'

test('teste: getParsedBody function', ()=>{
    const input = 'dado'
    const func = getParsedBody(input)
    const expected = 'dado'
    expect(func).toEqual(expected)
})
