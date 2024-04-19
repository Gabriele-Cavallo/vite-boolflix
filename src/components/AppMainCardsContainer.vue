<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import SingleCard from './SingleCard.vue';
    export default{
        name: 'AppMainCardsContainer',
        components:{
            SingleCard,
        },
        data(){
            return {
                store,
            }
        },
        methods: {
            getActorsFromApi(idFilm){
            if(store.actors.length <= 0){
                const queryParams = {
                api_key: 'ea69b58888f2a2d02844968480d9cddb',
                }
                axios.get (`https://api.themoviedb.org/3/movie/${idFilm}/credits`, {
                    params: queryParams
                })
                .then((response) => {
                    response.data.cast.forEach(actor => {
                        if(!store.actors.includes(actor.name) && store.actors.length < 5){
                            store.actors.push(actor.name);
                        }
                    });
                })
            }else{
                store.actors = [];
            }
        },
        // Funzione che tramite chiamata axios recupera le informazioni dei generi dei film
        getGenresFromApi(idFilm){
            if(store.genres.length <= 0){
                const queryParams = {
                api_key: 'ea69b58888f2a2d02844968480d9cddb',
                }
                axios.get (`https://api.themoviedb.org/3/movie/${idFilm}`, {
                    params: queryParams
                })
                .then((response) => {
                    response.data.genres.forEach(genre => {
                        if(!store.genres.includes(genre.name) && store.genres.length < 5){
                            store.genres.push(genre.name);
                        }
                    });
                })
            }else{
                store.genres = [];
            }
        },
        },
    }
</script>

<template>
    <!-- Contenitore delle card per i Film -->
    <section class="cards-container">   
        <div class="container">
            <h2>MOVIES</h2>
            <ul class="d-flex d-wrap">
                <!-- Creo una card per ogni elemento che popola l'array moviesList -->
                <SingleCard @click="getActorsFromApi(movie.id), getGenresFromApi(movie.id)" v-for="movie in store.moviesList" :key="movie.id" 
                :title="movie.title"
                :originalTitle="movie.original_title"
                :cardInfo="movie"
                >
                </SingleCard>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.cards-container{
    background-color: #434343;
    padding: 40px 0;
    color: $primary-color;
    .container{
        h2{
            text-align: center;
            font-size: 40px;
            margin: 40px 0;
        }
    }
}
</style>