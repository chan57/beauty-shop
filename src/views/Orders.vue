<template>
  <div class="contsainerOrders">
    <HeaderForAllNextPage />
    <div class="showAll" v-if="ifStore()">
      <div class="textiLogo">
        <h1>My orders</h1>
      </div>
      <h2 class="total-value">Quantity orders -- {{ valuee }}</h2>
      <h2 class="total-value">Total price -- {{ pricee }}$</h2>
      <br />
      <div
        class="orderArray"
        v-for="(obj, i) in $store.state.orderArrayObj"
        :key="i"
      >
        <img :src="obj.pathImg" />
        <div class="textOrder">
          <h2>Quantity product: {{ obj.value }}</h2>
          <h2>Price: {{ obj.price }}$</h2>
        </div>
      </div>
      <Buttons @click="clearOrdersFunc" class="clearOrders"
        >clear Orders</Buttons
      >
      <br />

      <h1 class="textfavprod">My favorite products</h1>
      <div
        class="elementsFav"
        v-for="(el, i) in $store.state.pathElementFavorite"
        :key="i"
      >
        <img :src="el" />
      </div>
      <Buttons @click="clearFavoriteFunc" class="clearFavorite">
        clear Favorite
      </Buttons>
    </div>
    <div class="showMes" v-else>
      <h1>Shoping cart is empty</h1>
      <h2 class="zeleniu">Add orders in catalog</h2>
      <router-link class="hrevff" to="/catalog">Go to Catalog</router-link>
      <router-link class="hrevff" to="/">Go to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import HeaderForAllNextPage from "../components/Layout/HeaderForAllNextPage.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import Buttons from "./Buttons.vue";

const store = useStore();
let pricee = ref(0);
let valuee = ref(0);

function ifStore() {
  if (
    (store.state.orderArrayObj.length == 0 &&
      store.state.pathElementFavorite.length == 0) ||
    (Boolean(store.state.orderArrayObj) == false &&
      Boolean(store.state.pathElementFavorite) == false)
  )
    return false;
  else return true;
}
function clearOrdersFunc() {
  store.state.orderArrayObj = "";
  console.log(store.state.orderArrayObj.length);
}
function clearFavoriteFunc() {
  store.state.pathElementFavorite = "";
}

(function value() {
  pricee.value = 0;
  valuee.value = 0;
  for (let el of store.state.orderArrayObj) {
    pricee.value += el.price;
    valuee.value += el.value;
    console.log(valuee.value);
  }
})();
</script>

<style lang="scss" scoped>
.contsainerOrders {
  font-family: "Qlassy", sans-serif;
  color: #555;
  margin-top: 25px;
  margin-left: 70px;
  margin-right: 70px;
  .total-value {
    color: rgb(124, 115, 102);
  }
  .textfavprod {
    text-align: center;
  }
  .showMes {
    text-align: center;
    .zeleniu {
      color: darkcyan;
      margin-bottom: 20px;
    }
    .hrevff {
      display: flex;
      justify-content: center;
      font-family: "Qlassy", sans-serif;
      color: #b08b66;
    }
  }
  .textiLogo {
    display: grid;
    justify-content: center;
  }

  .orderArray {
    margin-top: 20px;
    background-color: rgb(108, 155, 61);
    display: grid;
    grid-template-columns: 50% 50%;
    .textOrder {
    }
  }
  .elementsFav {
    background-color: rgb(112, 41, 41);
  }
}
</style>