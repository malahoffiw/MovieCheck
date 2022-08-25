import axios from "axios";

const API_URL = "https://kinopoiskapiunofficial.tech/api"
axios.defaults.baseURL = API_URL

async function fetchContextInfo(pageNumber, type) {
    console.log('Fetching page data...')

    return axios.get(`/v2.2/films?order=NUM_VOTE&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=2022&yearTo=2022&page=${pageNumber}`, {
        headers: {
            'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
        }
    })
}

export default fetchContextInfo