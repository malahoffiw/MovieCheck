import React from 'react';
import { Link } from "react-router-dom";
import classes from "./SearchBar.module.scss";

const SearchResults = ({items, clearQuery}) => {
    const results = items.map(item => (
        <Link to={`/movies/${item.filmId}`} key={item.filmId}>
            <div
                className={classes.resultsListItem}
                onClick={clearQuery}
            >
                    <p>{item.nameRu}</p>
                    <small>{item.year} &#183; Оценка: <b>{item.rating !== 'null' ? item.rating : "-"}</b></small>
            </div>
        </Link>
    ))

    return (
        <div className={classes.resultsList}>
            {results}
        </div>
    );
};

export default SearchResults;