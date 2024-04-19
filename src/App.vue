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
        // Funzione che esegue al click sul buttone cerca due chiamate all'API per recuperare le informazioni
        // sia sui film che sulle serie in base all'input dell'utente
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
                    store.moviesList = response.data.results;
                })
                axios.get ('https://api.themoviedb.org/3/search/tv', {
                    params: queryParams
                })
                .then((response) => {
                    store.seriesList = response.data.results;
                    store.loading = false;
                })
            }else{
                // se il campo input è vuoto quando il tasto cerca viene premuto
                // carica il component AppLoader
                store.loading = true;
            }
        }
    },
    mounted (){

    },
}
</script>

<template>
    <!-- Componente figlio di AppVue che scatena l'$emit e richiama la funzione getInfoFromAPI -->
    <AppHeader @search="getInfoFromAPI"></AppHeader>
    <main>
        <!-- Il loader viene mostrato al primo caricamento della pagina e se entrambi gli array
        di ricerca sono vuoti -->
        <AppLoader v-if="store.loading == true || store.moviesList.length <= 0  && store.seriesList.length <= 0"></AppLoader>
        <!-- Se lo stato di AppLoader viene trasformato in false dalla funzione getInfoFromAPI allora
        vengono mostrate le sezioni dei film e delle serie -->
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