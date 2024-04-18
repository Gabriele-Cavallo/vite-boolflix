<script>
import { store } from '../store.js';
import SingleCardSeries from './SingleCardSeries.vue';
    export default{
        name: 'AppMainCardsContainerSeries',
        components:{
            SingleCardSeries,
        },
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <!-- Contenitore delle card per le Serie -->
    <section class="cards-container">   
        <div class="container">
            <h2>SERIES</h2>
            <ul class="d-flex d-wrap">
                <!-- Creo una card per ogni elemento che popola l'array seriesList -->
                <SingleCardSeries v-for="series in store.seriesList" :key="series.id" :series="series"></SingleCardSeries>
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
        font-size: 30px;
        margin: 40px 0;
        font-size: 40px;
        }
    }
}
</style>