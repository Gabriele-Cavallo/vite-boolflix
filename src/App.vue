<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardsContainer from './components/AppMainCardsContainer.vue';

export default{
    components: {
        AppHeader,
        AppMainCardsContainer,
    },
    data (){
    return{
        store
    }
    },
    methods: {
        getInfoFromAPI(){
            const queryParams = {
                api_key: 'ea69b58888f2a2d02844968480d9cddb',
            };
            if (store.searchedFilm !== ''){
                queryParams.query = store.searchedFilm;
            }
            axios.get ('https://api.themoviedb.org/3/search/movie', {
                params: queryParams
            })
            .then((response) => {
                this.store.moviesList = response.data.results;
            })
        }
    },
    mounted (){

    },
}
</script>

<template>
    <AppHeader @search="getInfoFromAPI"></AppHeader>
    <main>
        <AppMainCardsContainer></AppMainCardsContainer>
    </main>
</template>

<style lang="scss">
    @use './style/generic';



</style>