import React, { useState } from "react"
import {Link} from "react-router-dom"
import { CSSTransition } from "react-transition-group";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./Header.module.scss";

const Header = ({isOpen, setIsOpen}) => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

    return (
        <header className={isSearchBarOpen ? classes.searchBarOpen : ""}>
            {!isSearchBarOpen &&
                <div className={classes.headerMenu}>
                    <div>
                        <i
                            className={isOpen ? "ri-close-line" : "ri-menu-line"}
                            onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
                        ></i>
                        <CSSTransition
                            in={isOpen}
                            classNames="transition"
                            timeout={300}
                            unmountOnExit
                        >
                            <DropdownMenu setIsOpen={setIsOpen}/>
                        </CSSTransition>
                    </div>
                    <Link to="/" onClick={() => setIsOpen(false)}><p>Главная</p></Link>
                </div>
            }

            <CSSTransition
                in={isSearchBarOpen}
                classNames="barOpenTransition"
                timeout={300}
                unmountonExit
            >
                <SearchBar
                    isSearchBarOpen={isSearchBarOpen}
                    setIsSearchBarOpen={setIsSearchBarOpen}

                />
            </CSSTransition>
        </header>
    )
}

export default Header
