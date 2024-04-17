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
            visible: true,
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
    <li @mouseenter.prevent="visible = false" @mouseleave.prevent="visible = true" class="series-card">
        <img v-if="series.poster_path !== null && visible === true" :src="'https://image.tmdb.org/t/p/w342' + series.poster_path" :alt="series.name">
        <div class="info-wrapper-series">
            <h3>
                <span>Nome serie: </span>
                {{ series.name }}
            </h3>
            <div>
                <span>Nome originale: </span>
                {{ series.original_name }}
            </div>
            <LanguageFlag :language="series.original_language"></LanguageFlag>
            <div class="star-point-series">
                <span>Voto: </span>
                <i v-for="star in score" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - score)" class="fa-solid fa-star no-point"></i>
            </div>
            <p>
                <span>Overview: </span>
                {{ series.overview }}
            </p>
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
    list-style: none;
    color: white;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .info-wrapper-series{
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
        .star-point-series i{
            color: yellow;
            .no-point{
                color: grey;
            }
        }
    }
}
</style>