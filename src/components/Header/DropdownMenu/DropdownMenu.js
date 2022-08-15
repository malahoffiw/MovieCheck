import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../../Context";
import classes from "./DropdownMenu.module.scss";

const DropdownMenu = ({setIsOpen}) => {
    const {setMainPage} = useContext(Context)

    return (
        <div className={classes.dropdown}>
            <Link
                to="/movies"
                className={classes.dropdownItem}
                onClick={() => {
                    setMainPage('movies')
                    setIsOpen(false)
                }}
            >
                <i className="ri-film-fill"></i>
                <p>Кино</p>
            </Link>
            <Link
                to="/movies"
                className={classes.dropdownItem}
                onClick={() => {
                    setMainPage('serials')
                    setIsOpen(false)
                }}
            >
                <i className="ri-tv-fill"></i>
                <p>Сериалы</p>
            </Link>
            <Link
                to="/favorites"
                className={classes.dropdownItem}
                onClick={() => setIsOpen(false)}
            >
                <i className="ri-heart-fill"></i>
                <p>Избранное</p>
            </Link>
        </div>
    )
}

export default DropdownMenu