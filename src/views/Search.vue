<template>
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
</template>
<script>
    export default {
        props:["not_found"],
    }
</script>