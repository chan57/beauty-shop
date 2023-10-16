<template>
  <div class="foot-container">
    <h2 class="zachemOnoTut">B</h2>
    <h2 class="text">B O L T A E V A</h2>
    <div class="row">
      <div class="company">
        <h4>Company</h4>

        <h5 class="company1">
          The brand strives to create respect for its products among the
          audience, so that the presence of the company's products is a sign of
          prestige.
        </h5>
        <img src="src/assets/grpFoot.png" />
      </div>

      <div class="navigation">
        <h4>Navigation</h4>

        <h5>Product catalog</h5>
        <h5>About company</h5>
        <h5>Work process</h5>
        <h5>Bonus program</h5>
        <h5>Partners</h5>
        <h5>Privacy Policy</h5>
      </div>

      <div class="product">
        <h4>Product</h4>

        <h5>Care cosmetics</h5>
        <h5>Eyebrow cosmetics</h5>
        <h5>Decorative cosmetics</h5>
        <h5>New in the collection</h5>
        <h5>Box and complect</h5>
        <h5>Accessories</h5>
      </div>

      <div class="contact">
        <h4>Contact</h4>
        <h5 class="contacttext">
          We are open to new opportunities, so you can contact our company
          representatives for any questions
        </h5>
        <div class="pictuersFoterContact">
          <h6 class="ContactText">Email</h6>
          <img src="src/assets/email.png" />
          <h6 class="ContactText">WatsUp</h6>
          <img class="wutcUpPictr" src="src/assets/wazzap.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/qlassy");
.foot-container {
  background-color: #eee4da;
  margin-top: 50px;
  font-family: "Qlassy", sans-serif;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 111px;

  color: #555;
  justify-content: space-between;
  .company1 {
    width: 224px;
  }
}
.text {
  position: relative;
  margin-left: 630px;
  margin-top: 70px;
  margin-bottom: 75px;
  color: #ac8f78;
  width: 180px;
}
.pictuersFoterContact {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.contacttext{
  margin-right: 114px;
}
.ContactText {
  margin-top: 0px;
}
.wutcUpPictr {
  margin-top: -2px;
}
.zachemOnoTut{
  color: #eee4da;
}
h5 {
  color: #a59696;
}
</style>