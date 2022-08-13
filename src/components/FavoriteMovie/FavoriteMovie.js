import React, {useContext, useState} from "react"
import {Context} from "../../Context";

const FavoriteMovie = ({movie}) => {
    const [hovered, setHovered] = useState(false)
    const {removeFavoriteMovie} = useContext(Context)

    const countries = movie.countries.map(country => `${country.country}`).join(', ')
    const genres = movie.genres.map(genre => `${genre.genre}`).join(', ')


    return (
        <>
            <div className="favorite-movie-item">
                <img src={movie.posterUrl} width="100px"  alt="another favorite movie"/>

                <div className="movie-info">
                    <p className="name">{movie.nameRu}</p>
                    <p className="name-countries">{movie.nameOriginal || movie.nameRu} &#183; {countries}</p>
                    <p className="year-genres">{movie.year} &#183; {genres}</p>
                </div>

                <div className="favorite-movie-btns">
                    <a
                        href={`https://www.kinopoisk.ru/film/${movie.kinopoiskId}/`}
                        target="_blank"
                        rel="noreferrer"
                        className="kinopoisk-link-btn"
                    >
                        Открыть на Кинопоиске
                    </a>
                    <button
                        className="delete-btn"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => removeFavoriteMovie(movie)}
                    >
                        <p>Удалить из избранного</p>
                        <i className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}></i>
                    </button>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default FavoriteMovie