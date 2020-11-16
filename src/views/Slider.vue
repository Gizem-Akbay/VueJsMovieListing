<template>
    <div>
        <appNavbar :search_mode.sync="search_mode"></appNavbar>
        <div class="pusher">
            <div v-if="$store.getters.is_loading" class="ui active dimmer">
                <div class="ui loader"></div>
            </div>
            <transition name="fade">
                <div v-show="search_mode" class="search-bar">
                    <div class="ui massive icon input">
                        <i @click="search_mode = false;" class="fas fa-times-circle"></i>
                        <input v-model="search" type="text" placeholder="Search movie..">
                    </div>
                </div>
            </transition>
            <div class="ui inverted vertical masthead center aligned segment">
                <div class="ui fluid container small-menu">
                    <div class="ui large secondary inverted pointing menu">
                        <a class="active item">Home</a>
                        <a class="item">Movie</a>
                        <a class="item">Tv</a>
                        <a class="item">Search</a>
                    </div>
                </div>
                <div class="slider-for">
                    <div v-if="not_found && !$store.getters.title_movie" class="relative">
                        <img class="not-found" src="@/assets/notfound.svg">
                        <div class="absolute">
                        </div>
                    </div>
                    <div v-else-if="$store.getters.title_movie" class="relative">
                        <img :src="$store.getters.title_movie.large_cover_image">
                        <div class="absolute">
                            <div class="ui text fluid container movie-title">
                                <h1 class="ui inverted header">
                                    {{$store.getters.title_movie.title}}
                                </h1>
                                <div class="ui blue rating disabled">
                                    <i class="heart icon"></i>
                                </div>
                                <span> {{$store.getters.imdb_rate}}</span>
                                <span style="color: #636262; padding-left: 1em">{{$store.getters.title_movie.genres.join(',')}}</span>
                                <p style="margin-top: 20px; max-width: 400px; ">{{$store.getters.title_movie.summary}}</p>
                                <button class="ui secondary right labeled icon button">
                                <i class="fas fa-play"></i>Watch Trailler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <appMovieList :search="search" :not_found="not_found"></appMovieList>
        </div>
    </div>
</template>
<script>
    import Navbar from "./Navbar";
    import MovieList from "./MovieList";
    export default {
        data: () => ({
            search_mode: false,
            timer: null,
            search: ''
        }),
        components: {
            appNavbar: Navbar,
            appMovieList: MovieList
        },
        created () {
            this.$store.dispatch('get_movies');
        },
        computed: {
            not_found () {
             return this.$store.getters.movies.length === 0 && !this.$store.getters.is_loading;
            }
        },
        watch: {
            search_mode (val) {
              if (!val) {
                this.search = '';
              }
            },
            search (val) {
                if (val) {
                    this.$store.commit('loading_status', true); 
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {this.$store.dispatch('get_movies', val);}, 500);
                }
                else {
                    this.$store.dispatch('get_movies'); 
                }
            } 
        }
    }
</script>