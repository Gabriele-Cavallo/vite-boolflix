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
            <!-- Tramite la funzione getImageUrl genero l'URL della bandiera da visualizzare in
            base al valore contenuto nella chiave original_language dell'API -->
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