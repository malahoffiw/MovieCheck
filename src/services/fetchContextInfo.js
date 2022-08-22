import axios from "axios";

const API_URL = "https://kinopoiskapiunofficial.tech/api"
axios.defaults.baseURL = API_URL

async function fetchContextInfo() {
    console.log('Fetching context data...')

    return Promise.all([
        axios.get("/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2022&yearTo=2022&page=1", {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        }),
        axios.get("/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2022&yearTo=2022&page=1", {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        })
    ])
}

export default fetchContextInfo