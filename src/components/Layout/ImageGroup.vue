<template>
  <div class="container-image">
    <div v-for="(img, i) in datImage" :key="i">
      <div class="images">
     <a :href=img.href><img class="img" :src=img.src> </a>
     </div>
    </div>
    <div v-for="(img, i) in datImage2" :key="i">
      <div class="imagess">
     <a :href=img.href><img class="img" :src=img.src> </a>
     </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const datImage = ref([]);
const datImage2 = ref([]);

function generImag() {
  for (let i = 4; i > 0; i--) {
    datImage.value.push({
      src: String(`src/assets/groupImage/ph${i}.png`),

      href: `#${i}`,
    });
  }
}

function generImag2() {
  for (let i = 1; i < 5; i++) {
    datImage2.value.push({
      src: String(`src/assets/groupImage/ph${i}.png`),

      href: `#${i}`,
    });
  }
}

onMounted(() => {
  generImag();
  generImag2();
});
</script>

<style lang="scss" scoped>
.container-image {
  margin-top: 70px;
  margin-left: 70px;
  margin-right: 70px;
      display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 30% 30% 30%;
  .images {

    .img {
      background-color: #EEE4DA;
    }
  }

  .imagess {
    margin-top:140px;
    .img {
      background-color: #EEE4DA;

    }
  }
}
</style>

