import React, { useRef } from 'react';
import classes from "./NewsSlider.module.scss";
import SliderItem from "./SliderItem";
import useWindowWidth from "../../hooks/useWindowWidth";

const NewsSlider = ({ items }) => {
    const slider = useRef(null)
    const windowWidth = useWindowWidth()
    const sliderItems = items.map(item => <SliderItem key={item.kinopoiskId} data={item}/>)

    const maxPosition = -items.length * 180 + 900
    let position = 0

    function prevHandler() {
        if (position === 0) {
            position = -900 * (items.length / 5 - 1)
        } else if (position < 0 && position >= -900) {
            position = 0
        } else if (position < -900) {
            position += 900
        }

        slider.current.childNodes.forEach(el => {
            el.style = `transform: translateX(${position}px)`
        })
    }

    function nextHandler() {
        if (position === maxPosition) {
            position = 0
        } else if (maxPosition - position > -900) {
            position = maxPosition
        } else {
            position -= 900
        }

        slider.current.childNodes.forEach(el => {
            el.style = `transform: translateX(${position}px)`
        })
    }

    if (items.length === 0) return <p className={classes.emptyLine}>Здесь пока ничего нет...</p>

    return (
        <div className={classes.slider}>
            <div className={classes.sliderLine} ref={slider}>
                {windowWidth > 600 ? sliderItems : sliderItems.slice(0, 8)}
            </div>

            { items.length > 5 && (
                <>
                    <button
                        className={`${classes.sliderBtn} ${classes.sliderBtnPrev}`}
                        onClick={prevHandler}
                    ></button>
                    <button
                        className={`${classes.sliderBtn} ${classes.sliderBtnNext}`}
                        onClick={nextHandler}
                    ></button>
                </>
            )}
        </div>
    );
};

export default NewsSlider;