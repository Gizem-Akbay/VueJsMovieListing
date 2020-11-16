<template>
    <div>
        <appNavbar></appNavbar>
        <div class="pusher">
            <appSlider></appSlider>
            <appFooter></appFooter>
        </div>
    </div>
</template>
<script>
    import Navbar from "./Navbar";
    import Slider from "./Slider";
    import Footer from "./Footer";
    export default {
    name: 'Home',
        components: {
            appNavbar: Navbar,
            appFooter: Footer,
            appSlider:Slider
        }
    }
</script>
<style lang="scss"></style>