<template>
  <div class="container">
    <div class="previy">
      <Header/>
      <Hero/>
    </div>
    <PreEndComponent/>
    <Productroup/>
    <CardDiplom/>
  </div>
</template>

<script setup>
import Header from "../components/Layout/Header.vue";
import Hero from "../components/Layout/Hero.vue";
import CardDiplom from '../components/Layout/CardDiplom.vue';
import PreEndComponent from '../components/Layout/PreEndComponent.vue';
import Productroup from '../components/Layout/Productroup.vue'
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/satoshi");

* {
  box-sizing: border-box;
}
   .previy {
    height: 900px;
    background-image: url("../assets/fon.png");
  }

</style>
