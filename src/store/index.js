import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/MovieService';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: []
    },
    mutations: {
        init_movies(state, movies) {
            state.movies = movies;
        },
        clear_movies(state) {
            state.movies = [];
        }
    },
    actions: {
        test() {
            MovieService.test()
                .then(resp => {
                    console.log('+++++', resp);
                });
        },
        get_movies({
            commit
        }, val = "") {
            MovieService.get_title(val)
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
        movies(state) {
            return state.movies;
        },
        title_movie(state) {
            return state.movies[0];
        }
    }
})