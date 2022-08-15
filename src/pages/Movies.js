import React, {useContext} from "react"

import MovieItem from "../components/MovieItem/MovieItem"
import {Context} from "../Context"

const Movies = ({setIsOpen}) => {
    const {movies, serials, mainPage} = useContext(Context)

    const imageElements = mainPage === "movies"
        ? movies.map(movie => (
            <MovieItem key={movie.kinopoiskId} id={movie.kinopoiskId} url={movie.posterUrl} movie={movie}/>
        ))
        : serials.map(serial => (
            <MovieItem key={serial.kinopoiskId} id={serial.kinopoiskId} url={serial.posterUrl} movie={serial}/>
        ))

    return (
        <main className="movieItems" onClick={() => setIsOpen(false)}>
            {imageElements}
        </main>
    )
}

export default Movies
