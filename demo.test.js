//const { testEnvironment } = require("./jest.config");

describe('basic examples', ()=>{
    
describe('passing test examples', ()=>{
    test('this test pass', () => {
        let a = 2;
        const b = a * 2;
        console.log(b);
    });
    
    test('this test pass too', () => {
        let b = 10;
        console.log(b);
    });
})

describe('faling tests examples', ()=>{
    test('this test fail', () => {
        throw new Error('manual error')
    });
    test('this test fail too', () => {
        let a;
        a.hola;
    });
    
});


})