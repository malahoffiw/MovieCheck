import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return () => {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return windowWidth
};

export default useWindowWidth;

