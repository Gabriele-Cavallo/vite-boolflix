<script>
    export default{
        name: 'LanguageFlag',
        props:{
            language: String
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}.png`, import.meta.url).href;
            }
        },
    }
</script>

<template>
    <div class="flag">
        <div>
            <img :src="getImageUrl(language)" :alt="`Language: ${language}`">
        </div>
    </div>
</template>

<style scoped lang="scss">
.flag{
    img{
        width: 30px;
    }
}
</style>