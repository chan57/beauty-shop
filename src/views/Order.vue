<template>
  <div>
    <HeaderForAllNextPage />
    <div class="containerOrder">
      <div class="images">
        <div class="sideImg">
          <img class="img" :src="datImage.src" />
        </div>
        <div class="sideText">
          <button
            class="buttAddFav"
            role="button"
            @click.once="butAddFavBoll = !butAddFavBoll"
          >
            add to favorite
          </button>

          <h1>{{ nazva }}</h1>
          <input
            class="inpValue"
            type="number"
            v-model.trim="inputValueProduct"
          />
          <h2>price: {{ datImage.text }}$</h2>
          <button @click="addShopiCart">add to shoping cart</button>
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
import { computed } from 'vue'
import { useStore } from 'vuex'
import HeaderForAllNextPage from "../components/Layout/HeaderForAllNextPage.vue";
import OrderFootPart from "./OrderFootPart.vue";

//why not defined ??
// console.log($route.path);
//  console.log($route.params.idprod);
//  console.log(route.params.idprod);
const store = useStore()

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
  //perevirka na 0<
  alert(
    `add ${inputValueProduct.value} product for the price ${datImage.value.text}$`
  );
  store.state.value = inputValueProduct.value;
  store.state.price = datImage.value.text;
  store.state.pathElement = datImage.value.src;
  // console.log(store.state.value)
}

watch(butAddFavBoll, (newbutFav, oldbutFuv) => {
  // console.log(newbutFav);
  alert("add to favorite");
});

watch(inputValueProduct, (newInp, oldInp) => {
  datImage.value.text = 0;
  datImage.value.text += fixValue * newInp;
  // console.log(fixValue)
});
</script>


<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/qlassy");

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
    button {
      max-width: 160px;
      align-items: center;
      appearance: none;
      background-color: #fffefe;
      border: 1px solid #dbdbdb;
      border-radius: 0.375em;
      box-shadow: none;
      box-sizing: border-box;
      color: #202020;
      cursor: pointer;
      display: inline-flex;
      font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        Helvetica, Arial, sans-serif;
      font-size: 1rem;
      height: 2.5em;
      justify-content: center;
      line-height: 1.5;
      padding: calc(0.5em - 1px) 1em;
      position: relative;
      text-align: center;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: top;
      white-space: nowrap;
    }

    .button:active {
      border-color: #4a4a4a;
      outline: 0;
    }

    .button:focus {
      border-color: #485fc7;
      outline: 0;
    }

    .button:hover {
      border-color: #b5b5b5;
    }

    .button:focus:not(:active) {
      box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
    }
  }
  .img {
    height: 100%;
  }
}
</style>