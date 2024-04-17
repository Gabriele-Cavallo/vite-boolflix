<script>
import LanguageFlag from './LanguageFlag.vue';

export default{
    name: 'SingleCardSeries',
    components:{
        LanguageFlag,
    },
    props: {
        series: Object,
    },
}
</script>

<template>
    <li class="card">
        <h3>{{ series.name }}</h3>
        <div>{{ series.original_name }}</div>
            <LanguageFlag :language="series.original_language"></LanguageFlag>
        <div>{{ series.vote_average }}</div>
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
    padding: 20px 0;
    list-style: none;
    color: white;
    *{
        margin-bottom: 10px;
    }
    h3{
        text-transform: uppercase;
    }
}
</style>