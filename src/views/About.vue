<template>
  <div class="contDelivery">
    <HeaderForAllNextPage />
    <div class="contDelivery2">
      <div class="maryMe">
        <h1>About Boltaeva</h1>
        <h4>
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market. The brand seeks to build respect among the
          audience for its products, so that the presence of the company's
          products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </h4>
      </div>

      <div class="dliveryBody">
        <img class="img" src="/src/assets/about.png" />
      </div>
    </div>
    <router-link class="hrevff" to="/catalog">Go to Catalog</router-link>
    <router-link class="hrevff" to="/">Go to Home</router-link>
  </div>
</template>

<script setup>
import HeaderForAllNextPage from "../components/Layout/HeaderForAllNextPage.vue";
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/satoshi");
.contDelivery {
  .contDelivery2 {
    margin-top: 30px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    .dliveryBody {
      font-family: "Qlassy", sans-serif;
      .img {
        max-width: 720px;
      }
    }
    .maryMe {
      background-color: rgb(250, 255, 255);

      h1 {
        font-family: "Qlassy", sans-serif;
        color: #4d4b4b;
      }
      h4 {
        max-width: 800px;
        color: #8d8080;
      }
    }
  }
  .hrevff {
    display: flex;
    color: #b08b66;
  }
}
</style>