const funcionalidad = require('../Functions/Calculadora')

describe('prueba de calculadora', ()=>{
    test('prueba', ()=>{
        const result  = funcionalidad( '3', '2', "*")
        expect(result).toBe(6)
    })
})