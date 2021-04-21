<template>
  <div class="contacts">
    <div class="contacts-content" />
  </div>
</template>
<style lang="scss" scoped>
.contacts {
  height: calc(100vh - 58px);
  width: 100%;
  background: #1b1b1b;
  display: flex;
  justify-content: center;
  &-content {
    max-width: 1100px;
    width: 100%;
    background: url('/img/contacts.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>