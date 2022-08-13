import React, {useEffect, useState} from "react"
import store from "store"

const Context = React.createContext(undefined)

const ContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [serials, setSerials] = useState([])
    const [favoriteMovies, setFavoriteMovies] = useState(store.get('favorites') || [])
    const urlMovies = "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=6&ratingTo=10&yearFrom=2015&yearTo=2022&page=1"
    const urlSerials = "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=6&ratingTo=10&yearFrom=2015&yearTo=2022&page=1"

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        Promise.all([
            fetch(urlMovies, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
                },
                signal
            }),
            fetch(urlSerials, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
                },
                signal
            })
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => {
            setMovies(data1.items)
            setSerials(data2.items)
        })
        .catch(e => {
            if (e.name !== "AbortError") alert(e.message)
        })

        return () => {
            controller.abort()
        }
    }, [])

    useEffect(() => {
        store.set('favorites', favoriteMovies)
    }, [favoriteMovies])

    function addFavoriteMovie(chosenMovie) {
        setFavoriteMovies(prevFavoriteItems => [
            chosenMovie,
            ...prevFavoriteItems,
        ])
    }

    function removeFavoriteMovie(chosenMovie) {
        setFavoriteMovies(prevFavoriteItems => prevFavoriteItems.filter(item => item.kinopoiskId !== chosenMovie.kinopoiskId))
    }

    function clearFavorites() {
        setFavoriteMovies([])
    }

    return (
        <Context.Provider value={{
            movies,
            serials,
            favoriteMovies,
            addFavoriteMovie,
            removeFavoriteMovie,
            clearFavorites,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}