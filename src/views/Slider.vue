<template>
    <div class="">
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
            <appSearch :not_found="not_found"></appSearch>
            <appMovieList :search="search" :not_found="not_found"></appMovieList>
            <appFooter></appFooter>
        </div>
    </div>
</template>
<script>
    import Navbar from "./Navbar";
    import Search from "./Search";
    import MovieList from "./MovieList";
    import Footer from "./Footer";
    export default {
        data: () => ({
            search_mode: false,
            timer: null,
            search: ''
        }),
        components: {
            appNavbar: Navbar,
            appSearch: Search,
            appMovieList: MovieList,
            appFooter: Footer
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