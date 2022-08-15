import React, {useState} from "react"
import MovieBar from "./MovieBar";
import classes from "./MovieItem.module.scss";
import {Link} from "react-router-dom";

const MovieItem = ({movie}) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={classes.itemContainer}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link
                to={`/movies/${movie.kinopoiskId}`}
            >
                <img src={movie.posterUrl} className={classes.itemImage} alt=""/>
            </Link>
            <MovieBar movie={movie} hovered={hovered} />
        </div>
    )
}

export default MovieItem