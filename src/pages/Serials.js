import React, {useContext} from "react"

import MovieItem from "../components/MovieItem/MovieItem"
import {Context} from "../Context"

const Serials = ({setIsOpen}) => {
    const {serials} = useContext(Context)

    const imageElements = serials.map(serial => (
        <MovieItem key={serial.kinopoiskId} id={serial.kinopoiskId} url={serial.posterUrl} movie={serial}/>
    ))

    return (
        <main className="shop-items" onClick={() => setIsOpen(false)}>
            {imageElements}
        </main>
    )
}

export default Serials