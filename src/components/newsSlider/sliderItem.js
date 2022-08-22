import React from 'react';
import { Link } from "react-router-dom";
import classes from "./newsSlider.module.scss";

const SliderItem = ({ data }) => {
    return (
        <Link
            to={`/movies/${data.kinopoiskId}`}
            className={classes.sliderLineItem}>
            <img src={data.posterUrl} alt="movie poster"/>
            <div className={classes.rating}>
                <p>{data.ratingKinopoisk}</p>
            </div>
        </Link>
    );
};

export default SliderItem;