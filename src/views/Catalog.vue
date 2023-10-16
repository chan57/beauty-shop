<template>
  <div class="containerCatalog">
    <HeaderForAllNextPage />
    <div class="previuImg">
      <h1>Care cosmetics</h1>
      <img src="/src/assets/catalohg.png" />
    </div>

    <ImageGroup />
  </div>
</template>

<script setup>
import ImageGroup from "../components/Layout/ImageGroup.vue";
import HeaderForAllNextPage from "../components/Layout/HeaderForAllNextPage.vue";
</script>

<style lang="scss" scoped>
.previuImg {
  margin-left: 70px;
  margin-right: 70px;
  font-family: "Qlassy", sans-serif;
  color: #555;
  text-align: center;
}
</style>