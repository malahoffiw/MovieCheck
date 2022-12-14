import React, { useContext } from 'react'
import { Context } from "../../Context";
import classes from "./MovieItem.module.scss";

const MovieBar = ({movie, isHovered}) => {
    const {
        favoriteMovies,
        toggleFavoriteMovie
    } = useContext(Context)

    const heartClassName = favoriteMovies.some(item => item.kinopoiskId === movie.kinopoiskId)
        ? "ri-heart-fill"
        : "ri-heart-line"

    return (
        <div className={`${classes.itemBar} ${isHovered ? "" :  classes.disabled}`}>
            <div className={classes.ratings}>
                <p> Кинопоиск: <b>{movie.ratingKinopoisk || "-"} </b></p>
                <p> IMDB: <b>{movie.ratingImdb || "-"} </b></p>
            </div>
            <div
                className={`${classes.iconBox} ${isHovered ? "" : classes.disabled}`}
                onClick={() => toggleFavoriteMovie(movie)}
            >
                <i className={heartClassName}></i>
            </div>
        </div>
    )
}

export default MovieBar