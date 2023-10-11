<template>
  <header class="header">
    <div class="header-top">
      <div class="href-group">
        <div  v-for="(item,i) of menu" :key="i">
        <router-link class=item.path :to=item.path>{{item.name}}</router-link>
      </div>
      </div>

      <div class="header-logo">
        <router-link to="/" class="header-href-logo"
          ><img src="/svg/Logo2.png"
        /></router-link>
      </div>


      <div class="header-search-group">
        <router-link class="cotacts-href" to="/contacts">contacts</router-link>
        <router-link to="/orders" class="header-href-search"
          ><img class="r" src="/svg/HeadSearch2.svg"
        /></router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue'

const menu = [
  {
    name:'catalog',
    path:'/catalog'
  },
  {
    name:'about',
    path:'/about'
  },
  {
    name:'delivery',
    path:'/delivery'
  },
]
</script>


<style lang="scss" scoped>
.header {
  height: 121px;

  .header-top {
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    .header-logo {
      display: flex;
      justify-content: center;
      margin-top: 60px;
    }
    .href-group {
      display: flex;
      justify-content: space-between;

      margin-top: 50px;
      margin-left: 70px;

    }

    .header-search-group {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;

    .header-href-search {
      margin-right: 70px;
  }
    }

    a {
      color: #555;
      text-decoration: none;
    }

      .r {
        width: 80px;
        height: 17px;
      }

  }
}
</style>