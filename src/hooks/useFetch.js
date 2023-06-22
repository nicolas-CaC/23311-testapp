import { useEffect, useState } from 'react'

export const useFetch = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (loading) {
            setTimeout(() => {
                (async () => {
                    try {
                        const resp = await fetch('https://randomuser.me/api')
                        const json = await resp.json()
                        setData(json)
                    }
                    catch (e) { setData({ error: 1 }) }
                    finally { setLoading(false) }
                })();

            }, 1000)
        }
    }, [loading])

    return { data, loading }
}
