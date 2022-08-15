import React, { useContext } from 'react'
import {Context} from "../../Context";
import classes from "./MovieItem.module.scss";

const MovieBar = ({movie, hovered}) => {
    const {
        favoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie
    } = useContext(Context)

    function heartIcon() {
        if (favoriteMovies.some(item => item.kinopoiskId === movie.kinopoiskId)) return (
            <div
                className={`${classes.iconBox} ${hovered ? "" : classes.disabled}`}
                onClick={(e) => {
                    e.stopPropagation()
                    removeFavoriteMovie(movie)
                }}
            >
                <i className="ri-heart-fill"></i>
            </div>
        )
        else return (
            <div
                className={`${classes.iconBox} ${hovered ? "" : classes.disabled}`}
                onClick={(e) => {
                    e.stopPropagation()
                    addFavoriteMovie(movie)
                }}
            >
                <i className="ri-heart-line"></i>
            </div>
        )
    }

    return (
        <div className={`${classes.itemBar} ${hovered ? "" :  classes.disabled}`}>
            <div className={classes.ratings}>
                <p> Кинопоиск: <b>{movie.ratingKinopoisk} </b></p>
                <p> IMDB: <b>{movie.ratingImdb} </b></p>
            </div>

            {heartIcon()}
        </div>
    )
}

export default MovieBar