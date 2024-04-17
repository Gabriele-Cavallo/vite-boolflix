<script>
    import axios from 'axios';
    import { store } from './store.js';

export default{
    data (){
    return{
        store
    }
    },
    methods: {

    },
    mounted (){

    },
}
</script>

<template>
    <div class="container">
        <h1>ciao sono appvue</h1> 
    </div>
</template>

<style lang="scss">
    @use './style/generic';
    @use './style/partials/variables' as *;

h1{
    color: $primary-color;
}

</style>