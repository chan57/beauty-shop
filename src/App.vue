<template>
  <div class="container">
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import Footer from './components/Layout/Footer.vue'
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/satoshi");

* {
  box-sizing: border-box;
}

body {
  margin: 0%;
  padding: 0%;
  font-family: "Satoshi", sans-serif;

}
.container {
  max-width: 1440px;
  margin: auto;
  background-color: #f5ece3;

}
</style>
