<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';

export default{
    components: {
        AppHeader,
    },
    data (){
    return{
        store
    }
    },
    methods: {
        getInfoFromAPI(){
            alert('ciao sono un alert')
        }
    },
    mounted (){

    },
}
</script>

<template>
    <AppHeader @search="getInfoFromAPI"></AppHeader>
</template>

<style lang="scss">
    @use './style/generic';



</style>