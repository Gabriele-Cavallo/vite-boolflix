<script>
export default{
    name: 'SingleCard',
}
</script>

<template>
    <h2 class="card">ciao sono una card</h2>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.card{
    color: $primary-color;
}
</style>