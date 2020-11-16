import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/MovieService';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        is_loading: false,
        mode: 'all',
        movies: []
    },
    mutations: {
        init_movies(state, movies) {
            state.movies = movies;
            state.is_loading = false;
        },
        clear_movies(state) {
            state.movies = [];
            state.is_loading = false;
        },
        change_mode(state, mode) {
            state.mode = mode;
            this.dispatch('get_movies');
        },
        loading_status(state, status) {
            state.is_loading = status;
        }
    },
    actions: {
        get_movies({
            commit,
            state
        }, val = "") {
            state.is_loading = true;
            MovieService.get_movies(val, state.mode)
                .then(resp => {
                    if (resp.data.data.movie_count > 0) {
                        commit('init_movies', resp.data.data.movies);
                    } else {
                        commit('clear_movies');
                    }
                });
        }
    },
    getters: {
        is_loading(state) {
            return state.is_loading;
        },
        mode(state) {
            return state.mode;
        },
        movies(state) {
            return state.movies;
        },
        title_movie(state) {
            return state.movies[1];
        },
        imdb_rate(state) {
            return state.movies[1].rating;
        }
    }
})