<script>
    export default{
        name: 'LanguageFlag',
        props:{
            language: String
        }
    }
</script>

<template>
    <div class="flag">
        <div v-if="language === 'it'">
            <img src="../assets/img/it-flag.png" alt="bandiera italiana">
        </div>
        <div v-else-if="language === 'en'">
            <img src="../assets/img/en-flag.png" alt="bandiera italiana">
        </div>
        <div v-else-if="language === 'fr'">
            <img src="../assets/img/fr-flag.jpg" alt="bandiera italiana">
        </div>
        <div v-else-if="language === 'de'">
            <img src="../assets/img/de-flag.png" alt="bandiera italiana">
        </div>
        <div v-else="language === 'de'">
            {{ language }}
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