<script>
import LanguageFlag from './LanguageFlag.vue';

export default{
    name: 'SingleCard',
    components:{
        LanguageFlag,
    },
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        posterPath: String,
        overview: String,
        voteAvarage: Number,
    },
    data(){
        return{
            score: null,
            visible: true,
        }
    },
    methods: {
        roundedScore(){
           this.score = Math.ceil(this.voteAvarage / 2);
           return this.score
        }
    },
    mounted(){
        this.roundedScore();
    }
}
</script>

<template>
    <!-- Template della singola card generato per i film -->

    <!-- Quando il cursore entra nell'area della card l'immagine sparisce e compaiono le info del film -->
    <li @mouseenter.prevent="visible = false" @mouseleave.prevent="visible = true" class="card">
        <!-- Locandina del film(se presente fra le info ricevute dall'API) -->
        <img v-if="posterPath !== null && visible === true" :src="'https://image.tmdb.org/t/p/w342' + posterPath" :alt="title">
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
            <LanguageFlag :language="originalLanguage"></LanguageFlag>
            <div class="star-point">
                <span>Voto: </span>
                <i v-for="star in score" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - score)" class="fa-solid fa-star no-point"></i>
            </div>
            <p>
                <span>Overview: </span>
                {{ overview }}
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
</style>