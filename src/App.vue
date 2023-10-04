<script setup>
import Header from "./components/Layout/Header.vue";
</script>

<template>
  <div class="container">
    
    <div class="previy">
      <Header />
      <a href="#"><img class="line" src="./assets/line2.png"></a>
    </div>


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

    .line {

      display: flex;
      justify-content: center;
      font-size: 48px;
      height: 63px;
      width: 380px;
      margin-top: 300px;
      margin-left : 528px;
      margin-right : 528px;
    }
  }
}
</style>
