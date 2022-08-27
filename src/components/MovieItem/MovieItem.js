import React, { useState } from "react"
import { Link } from "react-router-dom";
import MovieBar from "./MovieBar";
import classes from "./MovieItem.module.scss";

const MovieItem = ({movie}) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={classes.itemContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                to={`/movies/${movie.kinopoiskId}`}
            >
                <img src={movie.posterUrl} className={classes.itemImage} alt=""/>
            </Link>
            <MovieBar movie={movie} isHovered={isHovered} />
        </div>
    )
}

export default MovieItem