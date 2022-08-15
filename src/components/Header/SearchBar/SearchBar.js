import React, { useState } from 'react';
import classes from "./SearchBar.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";

const SearchBar = ({setIsSearchBarOpen, isSearchBarOpen}) => {
    const [query, setQuery] = useState('')
    const windowWidth = useWindowWidth()

    function searchIconClick() {
        if (windowWidth <= 600) {
            setIsSearchBarOpen(prevIsOpen => !prevIsOpen)
        }
    }

    function content(isBarOpen) {
        if (isBarOpen || windowWidth > 600) return (
            <div className={classes.searchBar}>
                <i
                    className="ri-search-2-fill"
                    onClick={searchIconClick}
                ></i>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Фильмы, сериалы ..."
                />
                <i
                    className={`ri-close-line ${classes.cancelIcon}`}
                    onClick={() => setQuery("")}
                ></i>
            </div>
        )
        else return (
            <div className={classes.searchBar}>
                <i
                    className="ri-search-2-fill"
                    onClick={searchIconClick}
                ></i>
            </div>
        )
    }

    return (
        content(isSearchBarOpen)
    );
};

export default SearchBar;