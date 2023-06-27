import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const initialValue = 0


// eslint-disable-next-line react/prop-types
export const App = ({ funcion }) => {

    const [value, setValue] = useState(initialValue)
    const { loading } = useFetch()

    const sumar = () => setValue(value + 1)
    const restar = () => setValue(value - 1)
    const reset = () => setValue(initialValue)

    const handlechange = ({ target }) => setValue(target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (value.trim() <= 1) return
        setValue('')
        funcion(value.trim())
    }

    return (
        <div>
            <p data-testid='state'>{ value }</p>
            <form onSubmit={ onSubmit } aria-label='form'>
                <input
                    type="text"
                    onChange={ handlechange }
                    placeholder='Valor'
                    value={ value }
                />
            </form>

            <button data-testid='resta' onClick={ restar }>Restar</button>
            <button aria-label='reset' onClick={ reset }>Reset</button>
            <button data-testid='suma' onClick={ sumar }>Sumar</button>

            <hr />
            <img src="https://picsum.photos/200/300" alt="imagen" />
            <div>{ loading ? 'Cargando datos...' : 'Cargado' }</div>

        </div>
    )
}

export default App
