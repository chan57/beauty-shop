<script setup>
import Header from "./components/Layout/Header.vue";

</script>

<template>
  <div class="container">

    <Header />
    <!-- <img src="./assets/fon.png" class="backgImg"> -->
  </div>

</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/lt-edge');

* {
  box-sizing: border-box;
}

body {
 font-family: 'Satoshi', sans-serif;
//  font-family: 'LT Edge', sans-serif;

}

.container {
  max-width: 1440px;
height: 900px;
  background-image: url("./assets/fon.png");



}
</style>
