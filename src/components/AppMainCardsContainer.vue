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
        <div class="contaier">
            <ul>
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
}
</style>