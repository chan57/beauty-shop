<template>
  <div class="manyProducts">
    <div v-for="(img, i) in datImageProd" :key="i">
      <div class="images">
        <a :href="img.href"><img class="img" :src="img.src" /> </a>

      </div>
    </div>
    <div v-for="(img, i) in datImageProd2" :key="i">
      <div class="imagess">
        <a :href="img.href"><img class="img" :src="img.src" /> </a>

      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";

const datImageProd = ref([]);
const datImageProd2 = ref([]);


function generImagProd() {
  for (let i = 4; i > 0; i--) {
    datImageProd.value.push({
      src: String(`src/assets/group2image/c${i}.png`),
      href: `#${i}`,

    });
  }
}

function generImagProd2() {
  for (let i = 1; i < 5; i++) {
    datImageProd2.value.push({
      src: String(`src/assets/group2image/c${i}.png`),
      href: `#${i}`,

    });
  }
}

onMounted(() => {
  generImagProd();
  generImagProd2();
});
</script>




<style lang="scss" scoped>
.manyProducts {
  // margin-top: 20px;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;

  .imagess {
    margin-top: 14px;
  }
}
</style>