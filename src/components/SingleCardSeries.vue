<script>
import LanguageFlag from './LanguageFlag.vue';

export default{
    name: 'SingleCardSeries',
    components:{
        LanguageFlag,
    },
    props: {
        series: Object,
    },
    data(){
        return{
            score: null,
        }
    },
    methods: {
        roundedScore(){
           this.score = Math.ceil(this.series.vote_average / 2);
           return this.score
        }
    },
    mounted(){
        this.roundedScore();
    }
}
</script>

<template>
    <li class="series-card">
        <img :src="'https://image.tmdb.org/t/p/w342' + series.poster_path" alt="locandina">
        <h3>{{ series.name }}</h3>
        <div>{{ series.original_name }}</div>
        <LanguageFlag :language="series.original_language"></LanguageFlag>
        <div class="star-point-series">
            <i v-for="star in score" class="fa-solid fa-star"></i>
            <i v-for="star in (5 - score)" class="fa-solid fa-star no-point"></i>
        </div>
    </li>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.series-card{
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
    h3{
        text-transform: uppercase;
    }
    img{
        width: 100%;
        height: 75%;
        display: block;
    }
    .star-point-series{
        color: yellow;
        .no-point{
            color: grey;
        }
    }
}
</style>