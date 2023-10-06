<template>
  <div class="container-image">
    <div v-for="(img, i) in datImage" :key="i">
      <div class="images">
        <a :href="img.href"><img class="img" :src="img.src" /> </a>
        <h5 class="textikk">{{ img.text }}</h5>
      </div>
    </div>
    <div v-for="(img, i) in datImage2" :key="i">
      <div class="imagess">
        <a :href="img.href"><img class="img" :src="img.src" /> </a>
        <h5 class="textik">{{ img.text }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const datImage = ref([]);
const datImage2 = ref([]);
let price = ref(50);

function generImag() {
  for (let i = 4; i > 0; i--) {
    datImage.value.push({
      src: String(`src/assets/groupImage/ph${i}.png`),
      href: `#${i}`,
      text: `price: ${price.value + i}$`,
    });
  }
}

function generImag2() {
  for (let i = 1; i < 5; i++) {
    datImage2.value.push({
      src: String(`src/assets/groupImage/ph${i}.png`),
      href: `#${i}`,
      text: `price: ${price.value + i}$`,
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
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 360px 620px;
  .images {
    .img {
      background-color: #eee4da;
    }
  }

  .imagess {
    margin-top: 140px;
    .img {
      background-color: #eee4da;
    }

    .textik {
      margin-bottom: 120px;
    }
  }
}
</style>

