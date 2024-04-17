<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardsContainer from './components/AppMainCardsContainer.vue';
    import AppMainCardsContainerSeries from './components/AppMainCardsContainerSeries.vue';

export default{
    components: {
        AppHeader,
        AppMainCardsContainer,
        AppMainCardsContainerSeries,
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
            if (store.searchedFilm !== ''){
                queryParams.query = store.searchedFilm;
            }
            axios.get ('https://api.themoviedb.org/3/search/tv', {
                params: queryParams
            })
            .then((response) => {
                this.store.seriesList = response.data.results;
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
        <AppMainCardsContainerSeries></AppMainCardsContainerSeries>
    </main>
</template>

<style lang="scss">
    @use './style/generic';



</style>