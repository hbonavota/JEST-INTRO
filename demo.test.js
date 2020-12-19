//El "describe" se usa para organizar los test, de modo que en este ejemplo coloco como bloque principal "basic examples", luego los test que pasaran "passing test examples", y luego los test que no pasaran "faling test examples"

/* 
La visualización en los test queda asi:

basic examples
    passing test examples
        √ this test pass (16 ms)
        √ this test pass too (1 ms)
    faling tests examples
        × this test fail (2 ms)
        × this test fail too
*/

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
/* INSTALACIÓN
npm i jest --save-dev

SCRIPT TEST

Para lanzar jest con un script en el package.json:
"test": "jest ",
"test-watch": "jest --watchAll"

Generar config:
https://jestjs.io/docs/en/configuration
Para crear jest.config.js donde poder configurar el comportamiento de la librería.
"jest:init": "jest --init",

*/