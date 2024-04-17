<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardsContainer from './components/AppMainCardsContainer.vue';

export default{
    components: {
        AppHeader,
        AppMainCardsContainer,
    },
    data (){
    return{
        store
    }
    },
    methods: {
        getInfoFromAPI(){
            alert('ciao sono un alert')
        }
    },
    mounted (){

    },
}
</script>

<template>
    <AppHeader @search="getInfoFromAPI"></AppHeader>
    <main>
        <AppMainCardsContainer></AppMainCardsContainer>
    </main>
</template>

<style lang="scss">
    @use './style/generic';



</style>