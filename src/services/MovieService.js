import axios from 'axios';
const API_BASE_URL = "https://yts.mx/api/v2/list_movies.json?"
export default {
    get_movies(val, mode) {
        var query = "limit=20";
        if (mode === 'last') {
            query += '&sort_by=year'
        } else if (mode === 'like') {
            query += '&sort_by=rating'
        }
        if (val) {
            query += ("&query_term=" + val)
        }
        return axios.get(API_BASE_URL + query);
    }
};