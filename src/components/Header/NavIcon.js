import React from "react";

const NavIcon = ({children, isOpen, setIsOpen}) => {
    return (
        <div>
            <i
                className={isOpen ? "ri-close-line" : "ri-menu-line"}
                onClick={() => setIsOpen(!isOpen)}
            ></i>

            {children}
        </div>
    )
}

export default NavIcon