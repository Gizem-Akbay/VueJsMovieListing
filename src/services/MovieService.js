import axios from 'axios';

const API_URL = "https://yts.mx/api/v2/list_movies.json?"
const TEST = "http://omdbapi.com/?apikey=21422052&"

export default {
    get_title(val) {
        var query = "sort_by=year&limit=20";

        if (val) {
            query += ("&query_term=" + val)
        }
        return axios.get(API_URL + query);
    },
    test() {
        return axios.get(TEST + 's=hangover&plot=full');
    }
};