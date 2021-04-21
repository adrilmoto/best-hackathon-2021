<template>
  <div class="about-page">
    <div class="about-content">
      <h1>HACKATHON’21</h1>
      <p>HACKATHON BEST URFU‘21– 24-часовой онлайн-марафон по программированию.</p>
    </div>
    <div class="about-content">
      <div class="images">
        <div class="images_1">
          <h2>2018</h2>
        </div>
        <div class="images_2">
          <h2>2019</h2>
        </div>
        <div class="images_3">
          <h2>2020</h2>
        </div>
      </div>
    </div>
    <div style="width: 1100px; margin-top: 100px; height: 1px; background: #4076FF" />
    <div class="about-content" style="margin-top: 150px;">
      <div style="width: 100%; display: flex; justify-content: center;">
        <div class="last">
          <div class="text-block">
            <h2>Кого мы ждем?</h2>
            <p>
              HACKATHON BEST URFU‘21 рассчитан на студентов IT специальностей по всей России.
              Но мы с удовольствием приглашаем так же школьников и специалистов в IT сфере.
            </p>
          </div>
          <div class="girl" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h2 {
  color: #4076FF;
  font-family: 'Roboto', sans-serif;
}
.text-block {
  background: #130e1b;
  max-width: 300px;
  padding: 20px;
  margin-right: 50px;
  margin-bottom: -40px;
}
.last {
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  justify-content: space-between;
}
.girl {
  width: 700px;
  height: 400px;
  background: url('/img/girl.png');
  background-position: center;
  background-size: cover;
}
.about {
  &-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
    color: #fff;
  }
  &-content {
    max-width: 1200px;
    width: 100%;
    margin-top: 50px;
    .images {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h2 {
        position: absolute;
        bottom: 0;
        left: calc(50% - 1.5rem);
        margin-bottom: -30px;
      }
      &_1 {
        position: relative;
        max-width: 350px;
        height: 300px;
        width: 100%;
        background: url('/img/about_1.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        // margin: 20px;
      }
      &_2 {
        position: relative;
        max-width: 350px;
        height: 300px;
        width: 100%;
        background: url('/img/about_2.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        // margin: 20px;
      }
      &_3 {
        position: relative;
        max-width: 350px;
        height: 300px;
        width: 100%;
        background: url('/img/about_3.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        // margin: 20px;
      }
    }
  }
}
</style>