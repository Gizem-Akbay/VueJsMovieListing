<template>
    <div>
        <appNavbar ></appNavbar>
        <div class="pusher">
            <appSlider></appSlider>
            <appMovieList></appMovieList>
            <appFooter></appFooter>

        </div>
    </div>
</template>
<script>
    import Navbar from "./Navbar";
    import Slider from "./Slider";
    import MovieList from "./MovieList";
    import Footer from "./Footer";
    export default {
    name: 'Home',
        components: {
            appNavbar: Navbar,
            appMovieList: MovieList,
            appFooter: Footer,
            appSlider:Slider
        }
    }
</script>
<style lang="scss"></style>