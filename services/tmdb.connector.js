const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '833d4b92e793be0a294be38247f12a29'

export default function getMoviesFromText(text) {

    const url = BASE_URL + '?api_key=' + API_KEY + '&language=en&query=' + text;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error)) 
}