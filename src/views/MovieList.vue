<template>
    <div>
    <section v-if="not_found" class="main-container">
        <h1>Not found any movie for ({{search}})</h1>
    </section>
    <section v-else class="main-container">
        <h1>Popular on Movie List</h1>
        <div class="box">
            <a :key="index" v-for="(movie, index) in $store.getters.movies"><img :src="movie.large_cover_image" alt=""></a>        
        </div>
    </section>
    </div>
</template>
<script>
    export default {
        computed: {
            not_found () {
             return this.$store.getters.movies.length === 0 && !this.$store.getters.is_loading;
            }
        }
    }
</script>