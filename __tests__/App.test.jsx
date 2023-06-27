import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../src/App";


describe('Test: App.jsx', () => {

    // const title = 'Titulo'

    test('toMatchSnapshot', () => {
        const { container } = render(<App />)
        expect(container).toMatchSnapshot()
    })

    test('getByText', () => {
        const { getByText } = render(<App />)
        expect(getByText('Restar')).toBeTruthy()
    })

    test('toContain', () => {
        const { container } = render(<App />)
        const divs = container.getElementsByTagName('div')
        expect(divs[0].innerHTML).toContain('Cargando datos')
    })

    test('getByTestId', () => {
        const { getByTestId } = render(<App />)
        expect(getByTestId('state')).toBeTruthy
    })

    test('getAllByText', () => {
        const { getAllByText } = render(<App />)
        expect(getAllByText('Sumar')).toBeTruthy()
    })

    test('getAllByTestId', () => {
        const { getAllByTestId } = render(<App />)
        expect(getAllByTestId('state').length).toBeGreaterThanOrEqual(1)
    })

    test('screen', () => {
        render(<App />)
        expect(screen.getAllByTestId('resta').length).toBeGreaterThanOrEqual(1)
    })

    test('valor inicial 0', () => {
        render(<App />)
        expect(screen.getByText(0)).toBeTruthy()
    })

    test('Eventos: Boton Suma', () => {
        render(<App />)
        fireEvent.click(screen.getByTestId('suma'))
        expect(screen.getByText(1)).toBeTruthy()
    })

    test('Eventos: Boton Resta', () => {
        render(<App />)
        fireEvent.click(screen.getByTestId('resta'))
        expect(screen.getByText(-1)).toBeTruthy()
    })

    test('Eventos: Boton Reset', () => {
        render(<App />)
        fireEvent.click(screen.getByTestId('resta'))
        // screen.debug()
        fireEvent.click(screen.getByRole('button', { name: 'reset' }))
        // screen.debug()
        expect(screen.getByTestId('state').innerHTML).toBe('0')
    })

    test('Desestructuracion', () => {


        render(<App />)

        const { src, alt } = screen.getByRole('img')

        expect(src).toMatch('https://picsum.photos/200/300')
        expect(alt).toBe('imagen')
    })



})