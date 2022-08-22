import React, { useEffect, useState } from "react"
import store from "store"
import { useQuery } from "@tanstack/react-query";
import fetchContextInfo from "./services/fetchContextInfo";

const Context = React.createContext(undefined)

const ContextProvider = ({children}) => {
    const [mainPage, setMainPage] = useState('movies')
    const [movies, setMovies] = useState(store.get('movies') || [])
    const [serials, setSerials] = useState(store.get('serials') || [])
    const [favoriteMovies, setFavoriteMovies] = useState(store.get('favorites') || [])

    const { refetch } = useQuery(
        ['contextData'],
        () => fetchContextInfo(),
        { onSuccess: response => {
                setMovies(response[0].data.items)
                setSerials(response[1].data.items)
                store.set('movies', response[0].data.items)
                store.set('serials', response[1].data.items)
                store.set('date', new Date().getDate())
                }, enabled: !store.get('movies'),
        }
    )

    // comment in dev mode
    useEffect(() => {
        if (new Date().getDate() !== store.get('date')) {
            refetch()
        }
    }, [refetch])

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