<template>
  <div class="contDelivery">

    <HeaderForAllNextPage/>
    <div class="dliveryBody">
        <h1>Delivery information</h1>
    <!-- <img class="imgg" src="/src/assets/delivery.png"> -->
    </div>
    <h4>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</h4>
    <router-link class="hrevff" to="/catalog">Go to Catalog</router-link>
    <router-link class="hrevff" to="/">Go to Home</router-link>
  </div>
</template>

<script setup>
// import Header from "../components/Layout/Header.vue";
import HeaderForAllNextPage from '../components/Layout/HeaderForAllNextPage.vue'
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/satoshi");
.contDelivery {
  h4 {
    // margin-left: 70px;
    // margin-right: 70px ;
    text-align: center;
      font-family: "Qlassy", sans-serif;
  color: #e9c7c7;
   background-color: rgb(175, 156, 141);
   
      margin-bottom: 20px;

  }
  .dliveryBody {
    display: grid;
    text-align: center;

    justify-content: center;
    // .imgg {
    //   width: 1300px;
    // }
    h1{
      text-align: center;
      font-family: "Qlassy", sans-serif;
  color: #484848;
    }

  }
  .hrevff{
    display: flex;

      margin-left: 70px;
      font-family: "Qlassy", sans-serif;
  color: #b08b66;

    }
}
</style>