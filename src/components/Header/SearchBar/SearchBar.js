import React, { useEffect, useRef, useState } from 'react';
import classes from "./SearchBar.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useDebounce from "../../../hooks/useDebounce";
import fetchSearchResults from "../../../services/fetchSearchResults";
import SearchResults from "./SearchResults";

const SearchBar = ({setIsSearchBarOpen, isSearchBarOpen}) => {
    const inputRef = useRef(null)
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const windowWidth = useWindowWidth()
    const debouncedQuery = useDebounce(query, 800)

    useEffect(() => {
        if (debouncedQuery.length > 0) {
            fetchSearchResults(debouncedQuery)
                .then(data => setSearchResults(data.data.films))
        } else {
            setSearchResults([])
        }
    }, [debouncedQuery])

    useEffect(() => {
        if (isSearchBarOpen === true && windowWidth <= 600) {
            inputRef.current.focus()
        }
    }, [windowWidth, isSearchBarOpen])

    function searchIconClick() {
        if (windowWidth <= 600) {
            setIsSearchBarOpen(prevIsOpen => !prevIsOpen)
        }
    }

    function clearQuery() {
        setQuery('')
        setSearchResults([])
        setIsSearchBarOpen(false)
    }

    if (isSearchBarOpen || windowWidth > 600) return (
        <>
            <div className={classes.searchBar}>
                <i className={`ri-search-2-fill ${classes.searchIcon}`}></i>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Фильмы, сериалы ..."
                />
                <i
                    className={`ri-close-line ${classes.cancelIcon}`}
                    onClick={() => {
                        if (query.length === 0) {
                            searchIconClick()
                        } else {
                            setQuery("")
                        }
                        setSearchResults([])
                    }}
                ></i>
                {windowWidth > 600 && <SearchResults items={searchResults.slice(0, 5)} clearQuery={clearQuery}/>}
            </div>
            {windowWidth <= 600 && <SearchResults items={searchResults.slice(0, 5)} clearQuery={clearQuery}/>}
        </>
    )

    return (
        <div className={classes.searchBar}>
            <i
                className={`ri-search-2-fill ${classes.searchIconClosed}`}
                onClick={searchIconClick}
            ></i>
        </div>
    )
};

export default SearchBar;