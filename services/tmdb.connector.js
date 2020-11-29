import {BASE_URL, BASE_URL_IMAGE, API_KEY} from '../config/tmdb.config'

export function getMoviesFromText(text, page) {

    const url = BASE_URL + '?api_key=' + API_KEY + '&language=en&query=' + text + '&page=' + page;
    console.log(url)
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error)) 
}

export function getPosterImage(name) {
    return BASE_URL_IMAGE + name;
}