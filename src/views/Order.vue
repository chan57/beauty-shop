<template>
  <div>
    <HeaderForAllNextPage />
    <div class="containerOrder">
      <router-link class="hrevff" to="/catalog">Back to Catalog</router-link>
      <router-link class="hrevff" to="/orders">Go to Shoping cart</router-link>
      <div class="images">
        <div class="sideImg">
          <img class="img" :src="datImage.src" />
        </div>

        <div class="sideText">
          <Buttons
            class="buttAddFav"
            role="button"
            @click.once="butAddFavBoll = !butAddFavBoll"
            >add to favorite</Buttons
          >
          <h1>{{ nazva }}</h1>
          <input
            class="inpValue"
            type="number"
            v-model.trim="inputValueProduct"
          />
          <h2>price: {{ datImage.text }}$</h2>
          <Buttons @click="addShopiCart">add to shoping cart</Buttons>
          <h4>About Product</h4>
          <h5>{{ teztAbout }}</h5>
        </div>
      </div>
      <OrderFootPart />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import HeaderForAllNextPage from "../components/Layout/HeaderForAllNextPage.vue";
import OrderFootPart from "./OrderFootPart.vue";
import Buttons from "./Buttons.vue";

const store = useStore();

const numbPict = ref(window.location.href);
let index = ref(numbPict.value.split("")[numbPict.value.split("").length - 1]);
let price = ref(50);
const datImage = ref({});
let butAddFavBoll = ref(false);
let inputValueProduct = ref(1);
const nazva = ref("Nazva Crema");
const teztAbout = ref(
  "A truly magical box that in a matter of seconds will make your eyebrows as natural as possible and at the same time expressive.The natural composition of all positions in this box guarantees the safe use of products. Try it to be sure!"
);
let fixValue = 0;

(function generImag3() {
  for (let i = 4; i > 0; i--) {
    if (i == index.value) {
      datImage.value.src = String(`../src/assets/groupImage/ph${i}.png`);
      datImage.value.text = price.value + i;
      fixValue += datImage.value.text;
    }
  }
})();

function addShopiCart() {
  if (inputValueProduct.value < 0) {
    alert("not a true value! take button to bay de product pls");
    inputValueProduct.value = 0;
  } else {
    alert(
      `add ${inputValueProduct.value} product for the price ${datImage.value.text}$`
    );
    store.state.orderArrayObj.push({
      value: inputValueProduct.value,
      price: datImage.value.text,
      pathImg: datImage.value.src,
    });
  }
}

watch(butAddFavBoll, (newbutFav, oldbutFuv) => {
  store.state.pathElementFavorite.push(datImage.value.src);
  alert("add to favorite");
});

watch(inputValueProduct, (newInp, oldInp) => {
  datImage.value.text = 0;
  datImage.value.text += fixValue * newInp;
});
</script>


<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/qlassy");
.hrevff {
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  margin-right: 20px;
  font-family: "Qlassy", sans-serif;
  color: #b08b66;
}
.images {
  font-family: "Qlassy", sans-serif;
  color: #555;
  margin-top: 25px;
  height: 900px;
  display: grid;
  grid-template-columns: 50% 50%;

  .sideText {
    margin-top: 30%;
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    height: 100%;
    max-height: 100px;
    .inpValue {
      height: 25px;
      width: 55px;
    }
  }
  .img {
    height: 100%;
  }
}
</style>