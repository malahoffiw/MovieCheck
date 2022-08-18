import React, {useContext, useState} from "react";
import {Context} from "../../../Context";
import classes from "./PosterSection.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";

const PosterSection = ({movieInfo}) => {
    const windowWidth = useWindowWidth()
    const [hoveredLink, setHoveredLink] = useState(false)
    const { toggleFavoriteMovie, favoriteMovies } = useContext(Context)
    const heartClassName = favoriteMovies.some(item => item.kinopoiskId === movieInfo.kinopoiskId)
        ? "ri-heart-fill"
        : "ri-heart-line"

    return (
        <div className={classes.sectionPoster}>
            <img src={movieInfo.posterUrl} alt="poster"/>
            <a
                href={movieInfo.webUrl}
                target="_blank"
                rel="noreferrer"
                className={classes.btn}
                onMouseEnter={() => setHoveredLink(true)}
                onMouseLeave={() => setHoveredLink(false)}
            >
                <p>{windowWidth > 600 && "Кинопоиск"}</p>
                <i className={hoveredLink ? "ri-share-forward-fill" : "ri-share-forward-line"}></i>
            </a>
            <div
                className={classes.btn}
                onClick={() => toggleFavoriteMovie(movieInfo.kinopoiskId, movieInfo.type)}
            >
                <p>{windowWidth > 600 && "Избранное"}</p>
                <i className={heartClassName}></i>
            </div>
        </div>
    );
};

export default PosterSection;

