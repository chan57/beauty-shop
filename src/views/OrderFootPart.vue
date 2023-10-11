<template>
  <div class="box">
    <div class="textPart">

      <h1>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</h1>
      <h4>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</h4>
    </div>

      <img class="immg" src="/src/assets/photForOrder.png">

  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/qlassy");
.box {
  margin-top: 70px;
  margin-bottom: 114px ;
  font-family: "Qlassy", sans-serif;
  color: #555;
  margin-bottom: -70px;

  max-height: 900px;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 50% 40%;
  justify-content:space-between;

  .textPart {
    margin-top: 45%;
    margin-left: 20%;
    max-width: 500px;

    justify-content: center;
  }
  .immg {
    max-width: 648px;
    height: 900px;
    margin-left: -72px;
  }
}
</style>