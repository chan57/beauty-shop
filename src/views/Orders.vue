<template>
  <div class="contsainerOrders">
    <HeaderForAllNextPage />
    <div class="showAll" v-if="ifStore()">
      <div class="textiLogo">
        <h1>My orders</h1>
      </div>

      <h2>Quantity orders: {{}}</h2>
      <h2>Total price: {{}}$</h2>
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

      <button @click="clearOrdersFunc" class="clearOrders">clear Orders</button>
      <br />

      <h1 class="textfavprod">My favorite products</h1>
      <div
        class="elementsFav"
        v-for="(el, i) in $store.state.pathElementFavorite"
        :key="i"
      >
        <img :src="el" />
      </div>

      <button @click="clearFavoriteFunc" class="clearFavorite">
        clear Favorite
      </button>
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
const store = useStore();

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
</script>

<style lang="scss" scoped>
.contsainerOrders {
  font-family: "Qlassy", sans-serif;
  color: #555;
  margin-top: 25px;
  margin-left: 70px;
  margin-right: 70px;
  .textfavprod{
      text-align: center;
  }
  .showMes {
    text-align: center;
    .zeleniu {
      color: darkcyan;
      margin-bottom: 20px;
    }
    .hrevff{
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

  button {
    margin-top: 20px;
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
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
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
</style>