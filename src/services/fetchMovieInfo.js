import axios from "axios";

const API_URL = "https://kinopoiskapiunofficial.tech/api"
axios.defaults.baseURL = API_URL

async function fetchMovieInfo(movieId) {
    console.log('Fetching movie data...')

    return Promise.all([
        axios.get(`/v2.2/films/${movieId}`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        }),
        axios.get(`/v2.2/films/${movieId}/facts`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        }),
        axios.get(`/v1/staff?filmId=${movieId}`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        }),
        axios.get(`/v2.2/films/${movieId}/distributions`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        }),
        axios.get(`/v2.2/films/${movieId}/box_office`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
            }
        })
    ])
}

export default fetchMovieInfo



