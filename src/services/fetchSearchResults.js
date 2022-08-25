import axios from "axios";

const API_URL = "https://kinopoiskapiunofficial.tech/api"
axios.defaults.baseURL = API_URL

async function fetchSearchResults(query) {
    console.log('Fetching search results...')

    return axios.get(`/v2.1/films/search-by-keyword?keyword=${query}&page=1`, {
        headers: {
            'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_TOKEN,
        }
    })
}

export default fetchSearchResults