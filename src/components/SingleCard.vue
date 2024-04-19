<script>
    import { store } from '../store.js';
    import LanguageFlag from './LanguageFlag.vue';

export default{
    name: 'SingleCard',
    components:{
        LanguageFlag,
    },
    props: {
        title: String,
        originalTitle: String,
        cardInfo: Object,
    },
    data(){
        return{
            store,
            score: null,
            visible: true,
            showInfo: false,
        }
    },
    methods: {
        // Funzione che legge il vote_avarage di film/serie tv su scala 1 a 10
        // e ritorna il punteggio arrotondato per eccesso su scala 1 a 5
        roundedScore(){
           this.score = Math.ceil(this.cardInfo.vote_average / 2);
           return this.score
        },
        toggleInfo(){
            this.showInfo = !this.showInfo;
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
    <li @click="toggleInfo" v-if="cardInfo.genre_ids.includes(store.filterChoice) || store.filterChoice === ''" @mouseenter.prevent="visible = false" @mouseleave.prevent="visible = true" :class="{'card-overflow' : visible === false}" class="card">
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
            <p v-if="showInfo">
                <span>Actors: {{ store.actors }}</span>
            </p>
            <p v-if="showInfo">
                <span>Genres: {{ store.genres }}</span>
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