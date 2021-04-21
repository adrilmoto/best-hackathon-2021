<template>
  <div class="landing-page">
    <div class="logo-contain">
      <div ref="logo-text" class="logo-text" />
      <div ref="logo" class="logo" />
    </div>
    <button ref="btn" class="btn" @click="nextPage()"> Подробнее</button>
    <div ref="best" class="logo-best" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  mounted() {
    this.$tween.set(this.$refs['logo-text'], { width: '0px'})
    this.$tween.set(this.$refs.logo, { scale: '0', opacity: '0'})
    this.$tween.set(this.$refs.best, { opacity: '0'})
    this.$tween.set(this.$refs.btn, { opacity: '0'})
    this.move()
  },
  methods: {
    nextPage() {
      this.$router.push('/about')
    },
    async move() {
      await this.$wait(1000)
      this.$tween.to(this.$refs.logo, 1, { scale: '1', opacity: '1'})
      await this.$wait(1500)
      this.$tween.to(this.$refs['logo-text'], 1, { width: '500px'})
      await this.$wait(1000)
      this.$tween.to(this.$refs.best, 1, { opacity: '1'})
      await this.$wait(500)
      this.$tween.to(this.$refs.btn, 1, { opacity: '1'})
    }
  },
}
</script>
<style lang="scss" scoped>
.landing-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  background: url('/img/bg-1.png');
  background-size: 100%;
  background-position: center;
  .btn {
    position: absolute;
    top: 65%;
    padding: 10px 20px;
    border: 2px solid white;
    font-size: 24px;
    cursor: pointer;
    background: none;
    color: #fff;
    border-radius: 50px;
    &:hover {
      background: rgb(255, 255, 255, 0.4);;
      color: rgb(0, 0, 255);
      border: 2px solid rgb(3, 3, 255);
    }
    &:focus {
      outline: none;
    }
  }
  .logo-best {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: url('/img/logo-best.png');
    background-position: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .logo-contain {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    max-width: 700px;
    height: 200px;
    .logo {
      width: 200px !important;
      height: 200px;
      background: url('/img/logo.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .logo-text {
      width: 500px;
      height: 200px;
      background: url('/img/logo-text.png');
      background-repeat: no-repeat;
      background-size: 500px;
      background-position: center;
    }
  }
  
}
</style>
