import { describe, expect, test } from "vitest";

const funcion = () => 6;

class Objeto { a = 1; b = 2 }

const y = { a: 1, b: 2 };
const z = new Objeto();

// funciones asincrónicas

const returnPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            const value = funcion()
            value === 5 ? resolve(value) : reject(Error('No value'))
        }, 1500)
    )

const getPokemon = async (pokemon) => {
    try {
        let data
        data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        data = await data.json()
        return await data
    }
    catch (err) { return null }
}


describe('Funciones sincrónicas', () => {

    test('toBe', () => {

        const resultado = funcion()
        expect(resultado).toBe(6)
        // assert.equal(resultado, 6)
    })

    test('toBeTruthy', () => {

        const resultado = funcion()
        expect(resultado).toBeTruthy()
    })

    test('toBeGreaterThan', () => {

        const resultado = funcion()
        expect(resultado).toBeGreaterThan(5)
    })

    test('toEqual', () => {
        expect(y).toEqual(z)
        // expect(y).toStrictEqual(z)
    })

})


describe('funciones asincrónicas', () => {

    test('Probando async', async () => {

        const resultadoBueno = await getPokemon('haunter')
        expect(resultadoBueno).toBeTruthy()

        const resultadoMalo = await getPokemon('hauer')
        expect(resultadoMalo).toBeFalsy()
    })

    test('Promise (then/catch)', () => {

        return returnPromise()
            .then(res => expect(res).toBe(5))
            .catch(err => {
                expect(err).toBeInstanceOf(Error)
                expect(err.message).toMatch(/No value/)
            })
    })

    test('then/catch', () => {

        return fetch('https://pokeapi.co/api/v2/pokemon/haunter')
            .then(res => res.json())
            .then(pokemon => expect(pokemon).toBeTruthy())
            .catch(err => expect(err).toBeInstanceOf(Error))

    })

})