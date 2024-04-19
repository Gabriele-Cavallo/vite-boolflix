<script>
    import { store } from '../store.js';
    import LanguageFlag from './LanguageFlag.vue';
    import axios from 'axios';

export default{
    name: 'SingleCard',
    components:{
        LanguageFlag,
    },
    props: {
        title: String,
        originalTitle: String,
        keyId: Number,
        genresId: Array,
        cardInfo: Object,
    },
    data(){
        return{
            store,
            score: null,
            visible: true,
            actors: [],
            genres: [],
        }
    },
    methods: {
        // Funzione che legge il vote_avarage di film/serie tv su scala 1 a 10
        // e ritorna il punteggio arrotondato per eccesso su scala 1 a 5
        roundedScore(){
           this.score = Math.ceil(this.cardInfo.vote_average / 2);
           return this.score
        },
        // Funzione che tramite chiamata axios recupera le informazioni del cast dei film
        getActorsFromApi(idFilm){
            if(this.actors.length <= 0){
                const queryParams = {
                api_key: 'ea69b58888f2a2d02844968480d9cddb',
                }
                axios.get (`https://api.themoviedb.org/3/movie/${idFilm}/credits`, {
                    params: queryParams
                })
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        this.actors.push(response.data.cast[i].name);
                    }
                })
            }else{
                this.actors = [];
            }
        },
        // Funzione che tramite chiamata axios recupera le informazioni dei generi dei film
        getGenresFromApi(idFilm){
            if(this.genres.length <= 0){
                const queryParams = {
                api_key: 'ea69b58888f2a2d02844968480d9cddb',
                }
                axios.get (`https://api.themoviedb.org/3/movie/${idFilm}`, {
                    params: queryParams
                })
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        if(!this.genres.includes(response.data.genres[i].name)){
                            this.genres.push(response.data.genres[i].name);
                        }
                    }
                })
            }else{
                this.genres = [];
            }
        },
    },
    mounted(){
        this.roundedScore();
    }
}
</script>

<template>
    <!-- Template della singola card generato per i film -->

    <!-- Le card vengono mostrate solo quando l'id corrisponde a quello della categoria selezionata oppure
    quando non è selezionata nessuna categoria ed è solo l'input utente a regolare le card visualizzate -->
    <!-- Quando il cursore entra nell'area della card l'immagine sparisce e compaiono le info del film -->
    <li v-if="genresId.includes(store.filterChoice) || store.filterChoice === ''"  @click="getActorsFromApi(keyId), getGenresFromApi(keyId)" @mouseenter.prevent="visible = false" @mouseleave.prevent="visible = true" :class="{'card-overflow' : visible === false}" class="card">
        <!-- Locandina del film(se presente fra le info ricevute dall'API) -->
        <img v-if="cardInfo.poster_path !== null && visible === true" :src="'https://image.tmdb.org/t/p/w342' + cardInfo.poster_path" :alt="title">
        <!-- Sezione card per le info sul film -->
        <div class="info-wrapper">
            <h3>
                <span>Titolo:</span>
                {{ title }}
            </h3>
            <div>
                <span>Titolo originale:</span>
                {{ originalTitle }}
            </div>
            <LanguageFlag :language="cardInfo.original_language"></LanguageFlag>
            <div class="star-point">
                <span>Voto: </span>
                <i v-for="star in score" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - score)" class="fa-solid fa-star no-point"></i>
            </div>
            <p v-if="actors.length > 0">
                <span>Actors: {{ actors }}</span>
            </p>
            <p v-if="genres.length > 0">
                <span>Genres: {{ genres }}</span>
            </p>
            <p>
                <span>Overview: {{ cardInfo.overview }}</span>
            </p>
        </div>
    </li>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.card{
    color: $primary-color;
    border: 2px solid $primary-color;
    border-radius: 15px;
    width: calc((100% / 4) - 20px);
    height: 600px;
    margin: 10px;
    list-style: none;
    color: white;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .info-wrapper{
        padding: 40px 20px;
        *{
            margin-bottom: 20px;
            font-size: 20px;
        }
        span{
            font-weight: bold;
        }
        h3{
            text-transform: uppercase;
        }
        .star-point i{
            color: yellow;
            &.no-point{
                color: grey;
            }
        }
    }
}
.card-overflow{
    overflow-y: auto;
}
</style>