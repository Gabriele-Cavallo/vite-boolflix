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
        }
    }
</script>

<template>
    <section class="cards-container">   
        <div class="container">
            <h2>MOVIES</h2>
            <ul class="d-flex d-wrap">
                <SingleCard v-for="movie in store.moviesList" :key="movie.id" :movie="movie"></SingleCard>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.cards-container{
    background-color: #434343;
    padding: 40px 0;
    text-align: center;
    color: $primary-color;
    .container{
        h2{
            font-size: 30px;
        }
    }
}
</style>