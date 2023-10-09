<script setup>
import Header from "./components/Layout/Header.vue";
import Hero from "./components/Layout/Hero.vue";


</script>

<template>
  <div class="container">
    <div class="previy">
      <Header />
      <Hero/>
    </div>
    <router-view/>
  </div>
</template>

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
  .previy {
    height: 900px;
    background-image: url("./assets/fon.png");
  }
}
</style>
