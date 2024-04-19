<script>
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
    }
</script>

<template>
    <!-- Contenitore delle card per i Film -->
    <section class="cards-container">   
        <div class="container">
            <h2>MOVIES</h2>
            <ul class="d-flex d-wrap">
                <!-- Creo una card per ogni elemento che popola l'array moviesList -->
                <SingleCard v-for="movie in store.moviesList" :key="movie.id" 
                :title="movie.title"
                :originalTitle="movie.original_title"
                :keyId="movie.id"
                :genresId="movie.genre_ids"
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