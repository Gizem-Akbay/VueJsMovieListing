<template>
    <div>
        <aside class="ui aside region">
            <ul>
                <li>
                    <a>
                    <i class="fas fa-home"></i>
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fas fa-film"></i>
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fas fa-tv"></i>
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fas fa-search"></i>
                    </a>
                </li>
            </ul>
        </aside>
        <div class="pusher">
            <!-- <div class="search">
                </div> -->
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
                    <div class="relative">
                        <img :src="$store.getters.title_movie.large_cover_image">
                        <div class="absolute">
                            <div class="ui text fluid container movie-title">
                                <h1 class="ui inverted header">
                                    {{$store.getters.title_movie.title}}
                                    <!-- genres
                                        rating -->
                                </h1>
                                <div class="ui blue rating disabled">
                                    <i class="star icon active"></i>
                                    <i class="star icon active"></i>
                                    <i class="star icon active"></i>
                                    <i class="star icon"></i>
                                    <i class="star icon"></i>
                                </div>
                                <span style="color: #636262; padding-left: 1em">{{$store.getters.title_movie.genres.join(',')}}</span>
                                <p style="margin-top: 20px; max-width: 400px; ">{{$store.getters.title_movie.summary}}</p>
                                <button class="ui secondary right labeled icon button">
                                <i class="fas fa-play"></i> Watch Trailler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="main-container">
                <h1>Popular on Movie List</h1>
                <div class="box">
                    <a :key="index" v-for="(movie, index) in $store.getters.movies"><img :src="movie.large_cover_image" alt=""></a>        
                </div>
            </section>
            <div class="ui inverted vertical footer segment">
                <div class="ui container">
                    <div class="ui stackable inverted divided equal height stackable grid">
                        <div class="three wide column">
                            <h4 class="ui inverted header">About</h4>
                            <div class="ui inverted link list">
                                <a href="#" class="item">Lorem</a>
                                <a href="#" class="item">Contact Us</a>
                                <a href="#" class="item">ipsum dolar</a>
                                <a href="#" class="item">Sit amet</a>
                            </div>
                        </div>
                        <div class="three wide column">
                            <h4 class="ui inverted header">Services</h4>
                            <div class="ui inverted link list">
                                <a href="#" class="item">Movies</a>
                                <a href="#" class="item">Tv Series</a>
                                <a href="#" class="item">Lorem</a>
                                <a href="#" class="item">Ipsum dolar</a>
                            </div>
                        </div>
                        <div class="seven wide column">
                            <h4 class="ui inverted header">Footer Header</h4>
                            <p>Lorem ipsum dolar sit amet. Lorem ipsum dolat sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'Home',
      data: () => ({
        search: ''
      }),
      created () {
        this.$store.dispatch('get_movies');
        this.$store.dispatch('test');
      },
      watch: {
        search (val) {
            if (val) {
                this.$store.dispatch('get_movies', val);
            }
        } 
      }
    }
</script>
<style lang="scss"></style>