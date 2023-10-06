<template>
  <div class="bazabaza">
    <div class="imag">
      <img class="nad2" src="src/assets/crem.png" />
      <div class="texti">
        <h2 class="text1">B O L T A E V A</h2>
        <h2 class="text">B O L T A E V A</h2>
        <h2 class="longText">
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </h2>
        <h4 class="te">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </h4>
        <h5 class="autor">Zara Boltaeva</h5>
        <h6 class="ceo">CEO, Founder</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/qlassy");

.bazabaza {
  width: 720px;
  height: 1000px;
  font-family: "Qlassy", sans-serif;

  .imag {
    margin-top: 50px;
    margin-left: 70px;
    margin-right: 70px;
    position: relative;
    .nad2 {
      margin-top: 10px;
      position: absolute;
    }

    .text1 {
      color: #f5ece3;
    }

    .text {
      margin-right: 426px;
      margin-left: 834px;
      margin-top: 200px;
      color: #ac8f78;
      width: 180px;
    }

    .longText {
      margin-right: 426px;
      margin-left: 834px;
      margin-top: 67px;
      width: 493px;
      color: #000000;
      // font-family: 'LT Edge 300', sans-serif;
    }

    .te {
      margin-right: 426px;
      margin-left: 834px;
      margin-top: 34px;
      width: 493px;
      color: rgb(0, 0, 0);
    }

    .autor {
      margin-right: 426px;
      margin-left: 834px;
      margin-top: 54px;
      width: 493px;
      color: rgb(0, 0, 0);
    }

    .ceo {
      margin-right: 426px;
      margin-left: 834px;
      margin-top: -21px;
      width: 493px;
      color: rgb(0, 0, 0);
    }
  }
}
</style>