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
    const [totalPages, setTotalPages] = useState(store.get('totalPages') || 0)

    const { refetch } = useQuery(
        ['contextData'],
        () => fetchContextInfo(),
        { onSuccess: response => {
                setTotalPages(Math.ceil(response[0].data.total / 20))
                store.set('totalPages', Math.ceil(response[0].data.total / 20))

                setMovies(response[0].data.items)
                setSerials(response[1].data.items)
                store.set('movies', response[0].data.items)
                store.set('serials', response[1].data.items)
                store.set('date', new Date().getDate())
                },
                enabled: !store.get('movies') || !store.get('serials'),
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

    function toggleFavoriteMovie(chosenMovie) {
        if (favoriteMovies.find(movie => movie.kinopoiskId === chosenMovie.kinopoiskId)) {
            setFavoriteMovies(prevFavoriteItems => prevFavoriteItems
                .filter(item => item.kinopoiskId !== chosenMovie.kinopoiskId))
        } else {
            setFavoriteMovies(prevFavoriteItems => [
                chosenMovie,
                ...prevFavoriteItems,
            ])
        }
    }

    return (
        <Context.Provider value={{
            movies,
            serials,
            totalPages,
            favoriteMovies,
            toggleFavoriteMovie,
            mainPage,
            setMainPage,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}