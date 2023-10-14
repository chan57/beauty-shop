<template>
  <div class="contDelivery">

    <HeaderForAllNextPage/>
    <div class="maryMe">
      <h1>About Boltaeva</h1>
        <h4>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</h4>
    </div>

    <div class="dliveryBody">

    <img src="/src/assets/about.png">
    </div>
    <router-link class="hrevff" to="/catalog">Go to Catalog</router-link>
  </div>
</template>

<script setup>
// import Header from "../components/Layout/Header.vue";
import HeaderForAllNextPage from '../components/Layout/HeaderForAllNextPage.vue'
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/satoshi");
.contDelivery {

  .dliveryBody {
    font-family: "Qlassy", sans-serif;
    display: grid;
    text-align: center;
    margin-top: 50px ;
    justify-content: center;


  }
  .maryMe {
    background-color: rgb(250, 255, 255);
    h1{
margin-left: 70px;
      font-family: "Qlassy", sans-serif;
  color: #4d4b4b;
    }

    h4 {
      margin-left: 70px;
      display: grid;
      justify-content: start;
      max-width: 800px;
       color: #8d8080;
    }
  }


  .hrevff{
    display: flex;
      margin-top: 40px;
      margin-left: 70px;

  color: #b08b66;

    }
}
</style>