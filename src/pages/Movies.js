import React, {useContext} from "react"

import MovieItem from "../components/MovieItem/MovieItem"
import {Context} from "../Context"

const Movies = ({setIsOpen}) => {
    const {movies} = useContext(Context)

    const imageElements = movies.map(movie => (
      <MovieItem key={movie.kinopoiskId} id={movie.kinopoiskId} url={movie.posterUrl} movie={movie}/>
    ))

    return (
        <main className="shop-items" onClick={() => setIsOpen(false)}>
            {imageElements}
        </main>
    )
}

export default Movies