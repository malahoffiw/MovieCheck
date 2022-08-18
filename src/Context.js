import React, {useEffect, useState} from "react"
import store from "store"
import setContextInfo from "./services/setContextInfo";

const Context = React.createContext(undefined)

const ContextProvider = ({children}) => {
    const [mainPage, setMainPage] = useState('movies')
    const [movies, setMovies] = useState([])
    const [serials, setSerials] = useState([])
    const [favoriteMovies, setFavoriteMovies] = useState(store.get('favorites') || [])

    useEffect(() => {
        setContextInfo(setMovies, setSerials)
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

    function toggleFavoriteMovie(id, type) {
        let chosenMovie
        if (type === "FILM") {
            chosenMovie = movies.find(movie => movie.kinopoiskId === id)
        } else {
            chosenMovie = serials.find(movie => movie.kinopoiskId === id)
        }

        if (favoriteMovies.find(movie => movie.kinopoiskId === id)) {
            removeFavoriteMovie(chosenMovie)
        } else {
            addFavoriteMovie(chosenMovie)
        }
    }

    return (
        <Context.Provider value={{
            movies,
            serials,
            favoriteMovies,
            toggleFavoriteMovie,
            mainPage,
            setMainPage
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}