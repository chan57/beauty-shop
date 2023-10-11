<template>
  <div>

    <HeaderForAllNextPage/>
    <h1>korzina</h1>
    <h2>  product: {{$store.state.value}}</h2>
    <h2>price: {{$store.state.price}}$</h2>
    <!-- <h2>{{$store.state.pathElement}}</h2> -->
    <img :src="$store.state.pathElement">
  </div>
</template>

<script setup>
// import Header from "../components/Layout/Header.vue";
import HeaderForAllNextPage from '../components/Layout/HeaderForAllNextPage.vue'
</script>

<style lang="scss" scoped>

</style>