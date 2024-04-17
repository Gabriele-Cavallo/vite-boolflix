<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardsContainer from './components/AppMainCardsContainer.vue';
    import AppMainCardsContainerSeries from './components/AppMainCardsContainerSeries.vue';
    import AppLoader from './components/AppLoader.vue';

export default{
    components: {
        AppHeader,
        AppMainCardsContainer,
        AppMainCardsContainerSeries,
        AppLoader,
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
                axios.get ('https://api.themoviedb.org/3/search/movie', {
                    params: queryParams
                })
                .then((response) => {
                    this.store.moviesList = response.data.results;
                })
                axios.get ('https://api.themoviedb.org/3/search/tv', {
                    params: queryParams
                })
                .then((response) => {
                    this.store.seriesList = response.data.results;
                    store.loading = false;
                })
            }else{
                store.loading = true;
            }
        }
    },
    mounted (){

    },
}
</script>

<template>
    <AppHeader @search="getInfoFromAPI"></AppHeader>
    <main>
        <AppLoader v-if="store.loading == true"></AppLoader>
        <div v-if="store.loading == false">
            <AppMainCardsContainer></AppMainCardsContainer>
            <AppMainCardsContainerSeries></AppMainCardsContainerSeries>
        </div>
    </main>
</template>

<style lang="scss">
    @use './style/generic';

main{
    height: calc(100vh - 130px);
}

</style>