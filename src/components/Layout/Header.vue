<template>
  <header class="header">
    <div class="header-top">
      <div class="href-group">
        <a class="first-href" href="#">catalog</a>
        <a href="#">about</a>
        <a href="#">delivery</a>
      </div>

      <div class="header-logo">
        <a href="#" class="header-href-logo"
          ><img src="/svg/header-logo.svg"
        /></a>
      </div>



      <div class="header-search-group">

        <a class="cotacts-href" href="#">contacts</a>
        <a href="#" class="header-href-search"
          ><img class="r" src="/svg/header-search.svg"
        /></a>
      </div>
    </div>
  </header>
</template>








<style lang="scss" scoped>
.header {
  height: 121px;

  .header-top {
    height: 121px;
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    .header-logo {
      display: flex;
      justify-content: center;
      margin-top: 50px;
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
      color: white;
    }

      .r {
        width: 110px;
        height: 17px;
      }

  }
}
</style>