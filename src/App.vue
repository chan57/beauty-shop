<script setup>
import Header from "./components/Layout/Header.vue";
import Hero from "./components/Layout/Hero.vue"
import ImageGroup from './components/Layout/ImageGroup.vue'
</script>

<template>
  <div class="container">

    <div class="previy">
      <Header />
      <Hero/>
    </div>
    <ImageGroup/>

  </div>
</template>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/satoshi");
@import url("https://fonts.cdnfonts.com/css/lt-edge");

* {
  box-sizing: border-box;
}

body {
  margin: 0%;
  padding: 0%;
  font-family: "Satoshi", sans-serif;
  //  font-family: 'LT Edge', sans-serif;
  background-color: #f5ece3;
}

.container {
  max-width: 1440px;
  margin: auto;
  .previy {
    height: 900px;
    background-image: url("./assets/fon.png");
  }
}
</style>
