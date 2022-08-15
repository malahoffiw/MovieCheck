import { useState, useEffect } from 'react';
import parseStaff from "../utils/parseStaff";

const useMovieInfo = (movieId) => {
    const [movieInfo, setMovieInfo] = useState({})
    const [movieFacts, setMovieFacts] = useState([])
    const [movieStaff, setMovieStaff] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const urlMovie = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
        const urlFacts = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/facts`
        const urlStaff = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`

        Promise.all([
            fetch(urlMovie, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
                },
                signal
            }),
            fetch(urlFacts, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
                },
                signal
            }),
            fetch(urlStaff, {
                headers: {
                    'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
                },
                signal
            }),
        ])
            .then(([res1, res2, res3]) =>
                Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([data1, data2, data3]) => {
                setMovieInfo(data1)
                setMovieFacts(data2.items)
                setMovieStaff(data3)
            })
            .catch(e => {
                if (e.name !== "AbortError") console.log(e)
            })

        return () => {
            controller.abort()
        }
    }, [movieId])

    return [movieInfo, movieFacts, parseStaff(movieStaff)]
};

export default useMovieInfo;
