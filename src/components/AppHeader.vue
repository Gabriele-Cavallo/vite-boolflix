<script>
import axios from 'axios';
import { store } from '../store.js';
import GenresFilter from './GenresFilter.vue';

export default{
    name: 'AppHeader',
    components: {
        GenresFilter,
    },
    data(){
        return {
            store,
        }
    },
    methods:{
        // Funzione che esegue una chiamata axios e recupera i generi di film e serie tv
        getGenresApi(){
            const queryParams = {
                api_key: 'ea69b58888f2a2d02844968480d9cddb',
            };
            axios.get('https://api.themoviedb.org/3/genre/movie/list', {
                params: queryParams
            })
            .then((response) => {
                store.filterMoviesGenres = response.data.genres;
            })
            axios.get('https://api.themoviedb.org/3/genre/tv/list', {
                params: queryParams
            })
            .then((response) => {
                store.filterSeriesGenres = response.data.genres;
            })
        },
    },
    mounted(){
        this.getGenresApi();
    }
}
</script>

<template>
    <!-- Header che contiene logo, input utente e tasto di ricerca -->
    <header class="d-flex jst-btwn algn-cntr">
        <div class="title">BOOLFLIX</div>
        <div class="search-menu">
            <GenresFilter @changeGenresId="getInfoFromAPI"></GenresFilter>
            <!-- Input utente che regola la ricerca eseguita dalla funzione getInfoFromAPI 
            in base al valore di searchedFilm -->
            <input v-model="store.searchedFilm" type="text" placeholder="Cerca....">
            <!-- Bottone che fa partire l'$emit ad AppVue e avvia la funzione getInfoFromAPI -->
            <button @click="$emit('search')" class="btn">Cerca</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

header{
    padding: 40px;
    background-color: black;
    color: $primary-color;
    min-height: 130px;
    .title{
        font-size: 30px;
        font-weight: bold;
    }
    .search-menu *{
        padding: 10px;
        margin-left: 10px;
        font-size: 20px;
        border-radius: 20px;
        border: 3px solid $primary-color;
        &.btn{
            color: $primary-color;
            font-weight: bold;
            background-color: black;
        }
    }
}
</style>