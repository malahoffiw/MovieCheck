import React from "react"
import {Link} from "react-router-dom"
import { CSSTransition } from "react-transition-group";
import DropdownMenu from "./DropdownMenu";
import NavIcon from "./NavIcon";

const Header = ({isOpen, setIsOpen}) => {

    return (
        <header>
            <div className="header-menu">
                <NavIcon isOpen={isOpen} setIsOpen={setIsOpen}>
                    <CSSTransition
                        in={isOpen}
                        classNames="transition"
                        timeout={300}
                        unmountOnExit
                    >
                        <DropdownMenu setIsOpen={setIsOpen}/>
                    </CSSTransition>
                </NavIcon>
                <Link to="/" onClick={() => setIsOpen(false)}><p>Главная</p></Link>
            </div>

        </header>
    )
}

export default Header
