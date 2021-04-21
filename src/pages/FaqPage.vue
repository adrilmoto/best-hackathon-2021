<template>
  <div class="faq">
    <div class="faq-content" />
  </div>
</template>
<style lang="scss" scoped>
.faq {
  height: calc(100vh - 58px);
  width: 100%;
  background: #1b1b1b;
  display: flex;
  // align-items: flex-start;
  justify-content: center;
  &-content {
    max-width: 1100px;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    background: url('/img/faq.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
  }
}
</style>