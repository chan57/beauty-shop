<template>
  <div class="contantner">
    <h1 class="bigTexti">
      Boltaeva - this is a real society of girls who show love to themselves
    </h1>
    <a href="#"><img class="oval" src="src/assets/oval.png" /></a>
    <img class="insta" src="src/assets/inst.png" />
    <h4 class="textInst">Instagram</h4>

  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/qlassy");
.contantner {
  display: grid;
    font-family: "Qlassy", sans-serif;
  grid-template-columns: 50% 50%;
  margin-top: 30px;
  margin-left: 70px;
  margin-right: 70px;
  .bigTexti {
    width: 600px;
    color: #555;
  }
  .oval {
    width: 310px;
    height: 80px;
    margin-left: 263px;
    margin-bottom: 97px;
    margin-top: 29px;
  }
  .insta {
    margin-left: 1006px;
    margin-bottom: 113px;
    margin-top: -149px;
    width: 16px;
    height: 16px;
  }
  .textInst {
    margin-left: 380px;
    margin-bottom: 137px;
    margin-top: -153px;
    z-index: 9;
  }
}
</style>