<template>
  <div class="partners">
    <div class="partners-content">
      <h1>Наши партнеры:</h1>
    </div>
    <div class="bor" style="background: #fff" />
    <div class="partners-content">
      <div class="partner_1 part" />
      <div class="partner_2 part" />
      <div class="partner_3 part" />
    </div>
    <div class="bor" style="background: #4076FF" />
    <div class="partners-content">
      <div class="partner_4 part" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.partner_1 {
  background: url('/img/partner_1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 100px;
}
.partner_1 {
  background: url('/img/partner_1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 100px;
  margin: 30px;
  cursor: pointer;
}
.part {
  &:hover {
    transform: scale(1.1)
  }
}
.partner_2 {
  background: url('/img/partner_2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 200px;
  height: 100px;
  margin: 30px;
  cursor: pointer;
}
.partner_3 {
  background: url('/img/partner_3.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 100px;
  margin: 30px;
  cursor: pointer;
}
.partner_4 {
  background: url('/img/partner_4.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 100px;
  margin: 30px;
  cursor: pointer;
}
.partners {
  width: 100%;
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-content {
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.bor {
  max-width: 900px;
  width: 100%;
  height: 2px;
  margin: 30px 0px;
}
</style>