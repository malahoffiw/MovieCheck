import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import classes from "./FavoriteMovie.module.scss";
import useWindowWidth from "../../hooks/useWindowWidth";

const FavoriteMovie = ({movie}) => {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavoriteMovie} = useContext(Context)
    const windowWidth = useWindowWidth()

    const genres = movie.genres.map(genre => ` ${genre.genre}`).join(', ')

    return (
        <>
            <div className={classes.favoriteMovieItem}>
                <Link
                    to={`/movies/${movie.kinopoiskId}`}
                >
                    <img src={movie.posterUrl} alt="another favorite movie"/>
                </Link>


                <div className={classes.movieInfo}>
                    <p className={classes.name}>{movie.nameRu}</p>
                    <p className={classes.yearGenres}>
                        {movie.year} &#183;
                        {windowWidth > 900 ? genres : genres.split(', ').slice(0, 2).join(', ')}
                    </p>
                </div>

                <div className={classes.favoriteMovieBtns}>
                    <a
                        href={`https://www.kinopoisk.ru/film/${movie.kinopoiskId}/`}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.kinopoiskLinkBtn}
                    >
                        {windowWidth > 900 && <p>Открыть на Кинопоиске</p>}
                        <i className="ri-share-forward-line"></i>
                    </a>
                    <div
                        className={classes.deleteBtn}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => toggleFavoriteMovie(movie)}
                    >
                        {windowWidth > 900 && <p>Удалить из избранного</p>}
                        <i className={isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavoriteMovie