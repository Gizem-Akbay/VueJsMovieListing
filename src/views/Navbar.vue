<template>
    <aside class="ui aside region">
        <ul>
            <li @click="$store.commit('change_mode', 'all')">
                <a :class="{'active': $store.getters.mode === 'all'}">
                <i class="fas fa-home"></i>
                </a>
            </li>
            <li @click="$store.commit('change_mode', 'like')">
                <a :class="{'active': $store.getters.mode === 'like'}">
                <i class="fas fa-thumbs-up"></i>
                </a>
            </li>
            <li @click="$store.commit('change_mode', 'last')">
                <a :class="{'active': $store.getters.mode === 'last'}">
                <i class="fas fa-list-ol"></i>
                </a>
            </li>
            <li @click="newSearchMode = !newSearchMode">
                <a>
                <i class="fas fa-search"></i>
                </a>
            </li>
        </ul>
    </aside>
</template>
<script>
    export default {
    props: ["search_mode"],
    computed: {
        newSearchMode: {
            get: function(){
                return this.search_mode;
            },
            set: function(newMode){
                this.$emit('update:search_mode',newMode);
            }   
        }
    }
}
</script>