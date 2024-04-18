<script>    
import { store } from '../store.js';
export default {
    name: 'AppLoader',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <!-- Banner mostrato all'utente al caricamento della pagina o se le ricerche danno risultato nullo -->
    <section class="loader">
        <div class="container">
            <div class="loader-wrapper">
                <h3>PROSSIMAMENTE SU BOOLFLIX:</h3>
                <div class="loader-film">
                    <img src="../assets/img/the-witcher.jpg" alt="locandina prossima uscita">
                    <img src="../assets/img/7-d-s.png" alt="locandina prossima uscita">
                    <img src="../assets/img/db-broly.jpg" alt="locandina prossima uscita">
                    <img src="../assets/img/dg-food.jpg" alt="locandina prossima uscita">
                    <img src="../assets/img/solo.webp" alt="locandina prossima uscita">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
section.loader{
    background-color: #434343;
    height: 100%;
    .container{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .loader-wrapper{
        color: $primary-color;
        font-size: 25px;
        .loader-film{
            height: 100%;
            img{
                margin: 40px 0;
                width: 20%;
                height: 600px;
                border: 2px solid $primary-color;
            }
        }
    }
}

</style>