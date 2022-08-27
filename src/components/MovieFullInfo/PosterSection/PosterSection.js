import React, { useContext, useState } from "react";
import { Context } from "../../../Context";
import classes from "./PosterSection.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";

const PosterSection = ({movieInfo}) => {
    const { toggleFavoriteMovie, favoriteMovies } = useContext(Context)
    const [isHoveredLink, setIsHoveredLink] = useState(false)
    const windowWidth = useWindowWidth()
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
                onMouseEnter={() => setIsHoveredLink(true)}
                onMouseLeave={() => setIsHoveredLink(false)}
            >
                <p>{windowWidth > 600 && "Кинопоиск"}</p>
                <i className={isHoveredLink ? "ri-share-forward-fill" : "ri-share-forward-line"}></i>
            </a>
            <div
                className={classes.btn}
                onClick={() => toggleFavoriteMovie(movieInfo)}
            >
                <p>{windowWidth > 600 && "Избранное"}</p>
                <i className={heartClassName}></i>
            </div>
        </div>
    );
};

export default PosterSection;

