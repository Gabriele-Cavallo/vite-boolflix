<script>
export default{
    name: 'SingleCard',
    props: {
        movie: Object,
    }
}
</script>

<template>
    <li class="card">
        <h2>{{ movie.title }}</h2>
        <h3>{{ movie.original_title }}</h3>
        <div>{{ movie.original_language }}</div>
        <div>{{ movie.vote_average }}</div>
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
    h2{
        text-transform: uppercase;
    }
}
</style>