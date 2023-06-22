import { describe, expect, test } from "vitest";
import { funcion } from "../src/App";


describe('Funciones sincrónicas', () => {

    test('funcion: resultado exacto', () => {

        const resultado = funcion()
        expect(resultado).toBe(6)
    })

    test('funcion: valor true', () => {

        const resultado = funcion()
        expect(resultado).toBeTruthy(6)
    })

    test('funcion: mayor a ocho', () => {

        const resultado = funcion()
        expect(resultado).toBeGreaterThan(5)
    })

})