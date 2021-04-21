<style lang="scss">
.header {
  // height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: #000;
  color: #fff;
  &-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    // border: 1px solid red;
    .nav {
      padding: 0px 10px;
      cursor: pointer;
      font-size: 18px;
      color: #fff;
      &:hover {
        color: #4076FF;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .nav {
    font-size: 0px;
  }
}
</style>
<template>
  <div class="header">
    <div class="header-content">
      <div
        v-for="menu in menus"
        :key="menu.id"
        @click="changeRoute(menu.path)"
        class="nav"
        :style="{ color: $route.path === menu.path ? '#4076FF' : ''}"
      >
        <p>{{menu.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HackHeader',
  data() {
    return {
      menus: [
        {name: 'О нас', path: '/about'},
        {name: 'Направления', path: '/directions'},
        {name: 'Партнеры', path: '/partners'},
        {name: 'Расписание', path: '/agenda'},
        {name: 'Контакты', path: '/contacts'},
        {name: 'FAQ', path: '/faq'},
      ]
    }
  },
  methods: {
    changeRoute(s) {
      console.log('push')
      if (this.$route.path !== s) this.$router.push(s)
    }
  }
}
</script>