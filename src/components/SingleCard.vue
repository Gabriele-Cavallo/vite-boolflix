<script>
export default{
    name: 'SingleCard',
}
</script>

<template>
    <div class="card">
        <h2>[title]</h2>
        <h3>[original-title]</h3>
        <div>[language]</div>
        <div>[vote]</div>
    </div>
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
}
</style>