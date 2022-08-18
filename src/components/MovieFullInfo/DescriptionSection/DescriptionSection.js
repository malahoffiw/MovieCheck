import React, { useState } from 'react';
import classes from "./DescriptionSection.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";

const DescriptionSection = ({  movieInfo, movieFacts }) => {
    const [activeSection, setActiveSection] = useState('desc')
    const [showSpoilers, setShowSpoilers] = useState(false)
    const windowWidth = useWindowWidth()

    function toggleSpoilers() {
        setShowSpoilers(prevSpoilers => !prevSpoilers)
    }

    const facts = movieFacts.map(fact => {
        if (!fact.spoiler) {
            return (
                <li key={fact.text}>
                    <p>
                        <i className="ri-arrow-drop-right-line"></i>
                        {fact.text.replace(/ |<[^>]+>|&.{3,6};/g, ' ').trim()}
                    </p>
                    <hr/>
                </li>
            )
        }
        if (showSpoilers) {
            return (
                <li
                    key={fact.text}
                    className={classes.spoiler}
                >
                    <p className={classes.spoilerMessage}>
                        <i className="ri-arrow-drop-right-line"></i>
                        Отмечено как спойлер!
                    </p>
                    <p>
                        {fact.text.replace(/ |<[^>]+>|&.{3,6};/g, ' ').trim()}
                    </p>
                    <hr/>
                </li>
            )
        }
        return ''
    })

    return (
        <div className={classes.description}>
            <div className={classes.options}>
                <div
                    className={activeSection === 'desc' ? classes.active : ""}
                    onClick={() => setActiveSection('desc')}
                >
                    <p>Описание</p>
                </div>
                <div
                    className={activeSection === 'facts' ? classes.active : ""}
                    onClick={() => setActiveSection('facts')}
                >
                    <p>Интересные факты</p>
                </div>
                {
                    windowWidth > 600 &&
                    <div
                        className={`${classes.spoilerToggler} ${activeSection === 'facts' ? classes.active : ""}`}
                        onClick={() => {
                            if (activeSection === 'facts') toggleSpoilers()
                        }}
                    >
                        <small>{showSpoilers ? "Скрыть" : "Показать"} спойлеры</small>
                    </div>
                }
            </div>
            <hr/>
            {
                windowWidth <= 600 &&
                <div
                    className={`${classes.spoilerToggler} ${activeSection === 'facts' ? classes.active : ""}`}
                    onClick={() => {
                        if (activeSection === 'facts') toggleSpoilers()
                    }}
                >
                    <small>{showSpoilers ? "Скрыть" : "Показать"} спойлеры</small>
                </div>
            }

            <div className={classes.content}>
                {
                    activeSection === "desc" &&
                    <div>
                        <p>{movieInfo.description}</p>
                    </div>
                }
                {
                    activeSection === "facts" &&
                    <ul className={classes.contentFacts}>
                        {facts}
                    </ul>
                }
            </div>
        </div>
    );
};

export default DescriptionSection;