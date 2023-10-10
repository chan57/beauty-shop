<template>
  <div>
    <HeaderForAllNextPage />
      <div class="images">
        <img class="img" :src="datImage.src" />
        <h5 class="textikk">{{ datImage.text }}</h5>
      </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderForAllNextPage from "../components/Layout/HeaderForAllNextPage.vue";

//why not defined ??
// console.log($route.path);
//  console.log($route.params.idprod);
//  console.log(route.params.idprod);

const numbPict = ref(window.location.href);
let index = ref(numbPict.value.split("")[numbPict.value.split("").length - 1]);
let price = ref(50);
const datImage = ref({});

(function generImag3() {
  for (let i = 4; i > 0; i--) {
    if (i == index.value) {
      datImage.value.
        src = String(`../src/assets/groupImage/ph${i}.png`);
        datImage.value.text = `price: ${price.value + i}$`;

    }
  }
})()

</script>

<style lang="scss" scoped>
</style>