<script>
import LanguageFlag from './LanguageFlag.vue';

export default{
    name: 'SingleCard',
    components:{
        LanguageFlag,
    },
    props: {
        movie: Object,
    },
    data(){
        return{
            score: null,
            visible: true,
        }
    },
    methods: {
        roundedScore(){
           this.score = Math.ceil(this.movie.vote_average / 2);
           return this.score
        }
    },
    mounted(){
        this.roundedScore();
    }
}
</script>

<template>
    <li @mouseenter.prevent="visible = false" @mouseleave.prevent="visible = true" class="card">
        <img v-if="movie.poster_path !== null && visible === true" :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="locandina">
        <div class="info-wrapper">
            <h3>
                <span>Titolo:</span>
                {{ movie.title }}
            </h3>
            <div>
                <span>Titolo originale:</span>
                {{ movie.original_title }}
            </div>
            <LanguageFlag :language="movie.original_language"></LanguageFlag>
            <div class="star-point">
                <span>Voto: </span>
                <i v-for="star in score" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - score)" class="fa-solid fa-star no-point"></i>
            </div>
            <p>
                <span>Overview: </span>
                {{ movie.overview }}
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
            .no-point{
                color: grey;
            }
        }
    }
}
</style>