import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const initialValue = 0

export const funcion = () => {
    // blalbalbal
    return 6
}


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
            <p>{ value }</p>
            <form onSubmit={ onSubmit } aria-label='form'>
                <input
                    type="text"
                    onChange={ handlechange }
                    placeholder='Valor'
                    value={ value }
                />
            </form>

            <button onClick={ restar }>Restar</button>
            <button onClick={ reset }>Reset</button>
            <button onClick={ sumar }>Sumar</button>

            <hr />
            <img src="https://picsum.photos/200/300" alt="imagen" />
            <div>{ loading ? 'Cargando datos...' : 'Cargado' }</div>

        </div>
    )
}

export default App
