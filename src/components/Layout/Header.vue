<template>
  <header class="header">
    <div class="header-top">

      <a href="#">catalog</a>
      <a href="#">about</a>
      <a href="#">delivery</a>


        <div class="header-logo">
        <img href="#" src="/svg/header-logo.svg">
      </div>
      <a href="#">contacts</a>
      <div class="header-search-group">
        <img class="r" src="/svg/header-search.svg">
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
 height: 121px;
//  background: #F5ECE3;
 padding: 0px 70.182px 0px 70px;
// justify-content: center;
// align-items: center;
// flex-shrink: 0;
}

.header-top {
//   font-size: 14px;
// font-style: normal;
// font-weight: 400;
// line-height: 120%; /* 16.8px */
// letter-spacing: -0.28px;

display: flex;
justify-content: space-between;

}

.header-search-group {

}

.r {
  width: 110px;
height: 17px;

}
</style>