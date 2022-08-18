import axios from "axios";

const API_URL = "https://kinopoiskapiunofficial.tech/api"
axios.defaults.baseURL = API_URL

const setContextInfo = (setMovies, setSerials) => {
    console.log('Fetching context data...')

    Promise.all([
        axios.get("/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=6&ratingTo=10&yearFrom=2015&yearTo=2022&page=1", {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        }),
        axios.get("/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=6&ratingTo=10&yearFrom=2015&yearTo=2022&page=1", {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        })
    ])
        .then(([dataMovies, dataSerials]) => {
            setMovies(dataMovies.data.items)
            setSerials(dataSerials.data.items)
        })
        .catch(e => {
            console.log(e)
        })
}

export default setContextInfo