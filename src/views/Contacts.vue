<template>
  <div class="conta">
    <!-- <Header/> -->
    <HeaderForAllNextPage/>
    <div class="containerContacts">
        <h1>Our contacts</h1>
        <img src="/src/assets/contacts.png">
        <router-link class="hrevf" to="/catalog">Go to Catalog</router-link>
    </div>

  </div>
</template>

<script setup>
// import Header from "../components/Layout/Header.vue";
import HeaderForAllNextPage from '../components/Layout/HeaderForAllNextPage.vue'
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/satoshi");
.conta{
  .containerContacts {
    display: grid;
    h1{
      text-align: center;
      font-family: "Qlassy", sans-serif;
  color: #bab6b6;
    }
    .hrevf{
      margin-top: 40px;
      font-family: "Qlassy", sans-serif;
  color: #b08b66;
  size: 110px;
    }
  margin-left: 70px;
  margin-right: 70px;
}
}

</style>