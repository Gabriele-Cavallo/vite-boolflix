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
    <li class="card">
        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="locandina">
        <h3>{{ movie.title }}</h3>
        <div>{{ movie.original_title }}</div>
        <LanguageFlag :language="movie.original_language"></LanguageFlag>
        <div class="star-point">
            <i v-for="star in score" class="fa-solid fa-star"></i>
            <i v-for="star in (5 - score)" class="fa-solid fa-star no-point"></i>
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
    text-align: center;
    list-style: none;
    color: white;
    overflow: hidden;
    *{
        margin-bottom: 10px;
    }
    img{
        width: 100%;
        height: 75%;
        display: block;
    }
    h3{
        text-transform: uppercase;
    }
    .star-point{
        color: yellow;
        .no-point{
            color: grey;
        }
    }
}
</style>