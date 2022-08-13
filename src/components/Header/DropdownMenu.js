import React from "react";
import {Link} from "react-router-dom";

const DropdownMenu = ({setIsOpen}) => {
    return (
        <div className="dropdown">
            <Link
                to="/"
                className="dropdown-item"
                onClick={() => setIsOpen(false)}
            >
                <i className="ri-film-fill"></i>
                <p>Кино</p>
            </Link>
            <Link
                to="/serials"
                className="dropdown-item"
                onClick={() => setIsOpen(false)}
            >
                <i className="ri-tv-fill"></i>
                <p>Сериалы</p>
            </Link>
            <Link
                to="/favorites"
                className="dropdown-item"
                onClick={() => setIsOpen(false)}
            >
                <i className="ri-heart-fill"></i>
                <p>Избранное</p>
            </Link>
        </div>
    )
}

export default DropdownMenu