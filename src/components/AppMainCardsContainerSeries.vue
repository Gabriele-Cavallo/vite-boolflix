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
    <section class="cards-container">   
        <div class="container">
            <h2>SERIES</h2>
            <ul class="d-flex d-wrap">
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
    text-align: center;
    color: $primary-color;
    font-size: 30px;
}
</style>