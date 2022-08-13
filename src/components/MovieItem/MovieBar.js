import React, { useContext } from 'react'
import {Context} from "../../Context";

const MovieBar = ({movie, hovered}) => {
    const {
        favoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie
    } = useContext(Context)

    function heartIcon() {
        if (favoriteMovies.some(item => item.kinopoiskId === movie.kinopoiskId)) return (
            <div
                className={`icon-box ${hovered ? "" : "disabled"}`}
                onClick={() => removeFavoriteMovie(movie)}
            >
                <i className="ri-heart-fill"></i>
            </div>
        )
        else return (
            <div
                className={`icon-box ${hovered ? "" : "disabled"}`}
                onClick={() => addFavoriteMovie(movie)}
            >
                <i className="ri-heart-line"></i>
            </div>
        )
    }

    return (
        <div className={`item-bar ${hovered ? "" : "disabled"}`}>
            <div className="ratings">
                <p> Кинопоиск: <b>{movie.ratingKinopoisk} </b></p>
                <p> IMDB: <b>{movie.ratingImdb} </b></p>
            </div>

            {heartIcon()}
        </div>
    )
}

export default MovieBar