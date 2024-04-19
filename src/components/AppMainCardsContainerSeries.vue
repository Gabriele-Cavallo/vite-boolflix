<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import SingleCard from './SingleCard.vue';
    export default{
        name: 'AppMainCardsContainerSeries',
        components:{
            SingleCard,
        },
        data(){
            return {
                store,
            }
        },
        methods: {
            // Funzione che tramite chiamata axios recupera le informazioni degli attori delle serie TV
            getActorsFromApi(idFilm){
                if(store.actors.length <= 0){
                    const queryParams = {
                    api_key: 'ea69b58888f2a2d02844968480d9cddb',
                    }
                    axios.get (` https://api.themoviedb.org/3/tv/${idFilm}/credits`, {
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
            // Funzione che tramite chiamata axios recupera le informazioni dei generi delle serie TV
            getGenresFromApi(idFilm){
                if(store.genres.length <= 0){
                    const queryParams = {
                    api_key: 'ea69b58888f2a2d02844968480d9cddb',
                    }
                    axios.get (` https://api.themoviedb.org/3/tv/${idFilm}`, {
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
    <!-- Contenitore delle card per le Serie -->
    <section class="cards-container">   
        <div class="container">
            <h2>SERIES</h2>
            <ul class="d-flex d-wrap">
                <!-- Creo una card per ogni elemento che popola l'array seriesList -->
                <!-- Al click richiamo le informazioni di attori e generi della card cliccata -->
                <SingleCard @click="getActorsFromApi(series.id), getGenresFromApi(series.id)" v-for="series in store.seriesList" :key="series.id" 
                :title="series.name"
                :originalTitle="series.original_name"
                :cardInfo="series"
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
        font-size: 30px;
        margin: 40px 0;
        font-size: 40px;
        }
    }
}
</style>