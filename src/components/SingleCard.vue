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
}
</script>

<template>
    <li class="card">
        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="locandina">
        <h3>{{ movie.title }}</h3>
        <div>{{ movie.original_title }}</div>
            <LanguageFlag :language="movie.original_language"></LanguageFlag>
        <div>{{ movie.vote_average }}</div>
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
}
</style>