<template>
  <div class="directions">
    <div class="directions-content">
      <div class="direction-text">
        <h2>Наши направления:</h2>
        <p>
          Вы можете выбрать одно из направлений, по которому будет выдан кейс.
          Также по кейсам будут представлены демонстрационные варианты.
        </p>
      </div>
      <div class="direction-descriptions">
        <div class="way">
          <div
            class="circle"
            :style="{backgroundImage: direction === 'ML' ? '' : `url('/img/logo.png')`}"
            @mouseenter="direction = 'ML'"
          >
            <h1 v-if="direction === 'ML'">ML</h1>
          </div>
          <p v-if="direction === 'ML'" style="color: #fff;">
            <span style="color: #4076FF">MACHINE LEARNING</span> направлен на машинное обучение и Big Data в маркетинге:
            оценка и прогнозирование рекламных кампаний,
            мониторинг СМИ и соцсетей, выявление трендов и управление репутацией в интернете. 
            Необходимые знания: Python/go, javascript, React/Vue, БД PostgreSQL/Clickhouse.
          </p>
        </div>
        <div class="way">
          <div class="circle" :style="{backgroundImage: direction === 'CST' ? '' : `url('/img/logo.png')`}" @mouseenter="direction = 'CST'">
            <h1 v-if="direction === 'CST'">CST</h1>
          </div>
          <p v-if="direction === 'CST'" style="color: #fff;">
            <span style="color: #4076FF">CONTENT SCREEN TESTING</span> направлен на разработку автоматизированного скрин-тестирования контента сайта для дизайнера веб-интерфейсов. 
            Необходимые знания: пJS, React/Vue, Python. 
          </p>
        </div>
        <div class="way">
          <div class="circle" :style="{backgroundImage: direction === 'NTB' ? '' : `url('/img/logo.png')`}" @mouseenter="direction = 'NTB'">
            <h1 v-if="direction === 'NTB'">NTB</h1>
          </div>
          <p v-if="direction === 'NTB'" style="color: #fff;">
            <span style="color: #4076FF">NAU-TRAINEE BOT</span> направлен на создание телеграм-бота, который поможет студентам отправить анкету на стажировку и узнать о вакансиях компании. 
            Необходимые знания: Google API (для выгрузки анкет в документы и любой библиотеки/фреймворка), Java, Kotlin, Python.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DirectionsPage',
  data() {
    return {
      direction: null
    }
  }
}
</script>
<style lang="scss" scoped>
.directions {
  width: 100vw;
  height: calc(100vh - 58px);
  background: url('/img/directions-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .way {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
  }
  .direction {
    width: 100%;
    &-text {
      max-width: 400px;
      background: #000;
      width: 100%;
      height: 200px;
      padding: 20px;
      color: #fff;
    }
    &-descriptions {
      height: 100%;
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
      p {
        max-width: 400px;
        width: 100%;
      }
    }
  }
  .circle {
    width: 150px;
    height: 150px;
    background: #000;
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    cursor: pointer;
  }
}
</style>