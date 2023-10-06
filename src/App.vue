<script setup>
import Header from "./components/Layout/Header.vue";
import Hero from "./components/Layout/Hero.vue";
import ImageGroup from './components/Layout/ImageGroup.vue';
import CardDiplom from './components/Layout/CardDiplom.vue';
import PreEndComponent from './components/Layout/PreEndComponent.vue';
import Productroup from './components/Layout/Productroup.vue';

</script>

<template>
  <div class="container">
    <div class="previy">
      <Header />
      <Hero/>
    </div>

    <ImageGroup/>
    <CardDiplom/>
    <PreEndComponent/>
    <Productroup/>
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
