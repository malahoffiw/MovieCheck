import React from 'react';
import classes from "./Footer.module.scss";
import useWindowWidth from "../../hooks/useWindowWidth";

const Footer = () => {
    const windowWidth = useWindowWidth()

    return (
        <footer>
            <a
                href="https://github.com/malahoffiw"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
            >
                <p>{windowWidth > 600 ? "Check out my GitHub" : "GitHub"}</p>
                <div className={classes.icon}></div>
            </a>
            <p className={classes.copyright}>@malahoffiw &copy; 2022</p>
        </footer>
    );
};

export default Footer;