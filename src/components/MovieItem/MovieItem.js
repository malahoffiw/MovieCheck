import React, {useState} from "react"
import MovieBar from "./MovieBar";

const MovieItem = ({movie}) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`item-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={movie.posterUrl} className="item-image" alt=""/>

            <MovieBar movie={movie} hovered={hovered} />
        </div>
    )
}

export default MovieItem