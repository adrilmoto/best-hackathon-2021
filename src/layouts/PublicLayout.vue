<template>
  <div class="layout">
    <HackHeader v-if="$route.path !== '/'" />
    <router-view />
  </div>
</template>
<script>
import HackHeader from '@/components/HackHeader.vue'

export default {
  name: 'layout',
  components: {
    HackHeader
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
.layout {
  background: url('/img/bg.png');
  background-position: left bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>