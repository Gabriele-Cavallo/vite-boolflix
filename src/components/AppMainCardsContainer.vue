<script>
import SingleCard from './SingleCard.vue';
    export default{
        name: 'AppMainCardsContainer',
        components:{
            SingleCard,
        }
    }
</script>

<template>
    <section class="cards-container">   
        <div class="container">
            <ul class="d-flex d-wrap">
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.cards-container{
    background-color: #434343;
    padding: 40px 0;
}
</style>