export default class OmdbService {
    _baseUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8';

    getMovies(searchQuery = 'Batman', page = 1) {
        return fetch(`${this._baseUrl}&s=${searchQuery}&page=${page}`)
            .then(res => res.json());
    }
}