<script>
export default{
    name: 'AppHeader'
}
</script>

<template>
    <header class="d-flex jst-btwn algn-cntr">
        <div class="title">BOOLFLIX</div>
        <div class="search-menu">
            <input type="text" placeholder="Cerca....">
            <button @click="$emit('search')" class="btn">Cerca</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

header{
    padding: 40px;
    background-color: black;
    color: $primary-color;
    .title{
        font-size: 30px;
        font-weight: bold;
    }
    .search-menu *{
        padding: 10px;
        margin-left: 10px;
        font-size: 20px;
        border-radius: 20px;
        border: 3px solid $primary-color;
        &.btn{
            color: $primary-color;
            font-weight: bold;
            background-color: black;
        }
    }
}
</style>