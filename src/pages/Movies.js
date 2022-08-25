import React, { useContext } from "react"

import MovieItem from "../components/MovieItem/MovieItem"
import { Context } from "../Context"
import usePagination from "../hooks/usePagination";

const Movies = ({setIsOpen}) => {
    const {movies, serials, mainPage, totalPages} = useContext(Context)

    const [
        allMovies,
        currentPageMovies,
        nextPageMovies,
        loadingMovies
    ] = usePagination(movies, "FILM")
    const [
        allSerials,
        currentPageSerials,
        nextPageSerials,
        loadingSerials
    ] = usePagination(serials, "TV_SERIES")

    const imageElements = mainPage === "movies"
        ? allMovies.map(movie => (
            <MovieItem key={movie.kinopoiskId} id={movie.kinopoiskId} url={movie.posterUrl} movie={movie}/>
        ))
        : allSerials.map(serial => (
            <MovieItem key={serial.kinopoiskId} id={serial.kinopoiskId} url={serial.posterUrl} movie={serial}/>
        ))

    return (
        <div className="moviesPage">
            <h1>Главные ленты года</h1>
            <main className="movieItems" onClick={() => setIsOpen(false)}>
                {imageElements}
            </main>
            {
                (loadingMovies || loadingSerials) && (
                    <div className="loader"></div>
                )
            }
            {
                mainPage === "movies" && currentPageMovies < totalPages && !(loadingMovies || loadingSerials) &&
                <div
                    className="nextPage"
                    onClick={nextPageMovies}
                >
                    <p>Показать еще</p>
                </div>
            }
            {
                mainPage === "serials" && currentPageSerials < totalPages && !(loadingMovies || loadingSerials) &&
                <div
                    className="nextPage"
                    onClick={nextPageSerials}
                >
                    <p>Показать еще</p>
                </div>
            }
        </div>
    )
}

export default Movies
