<script>
    import { store } from '../store.js';
    export default{
        name: 'GenresFilter',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
        <select @change="$emit('changeGenresId')" v-model="store.filterChoice">
            <option value="" selected>-- MOVIES --</option>
            <option v-for="filter in store.filterMoviesGenres" :value="filter.id">{{ filter.name }}</option>
            <option value="">-- Serie TV --</option>
            <option v-for="filter in store.filterSeriesGenres" :value="filter.id">{{ filter.name }}</option>
        </select>
</template>

<style scoped lang="scss">

</style>