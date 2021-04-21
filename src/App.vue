<template>
  <router-view/>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.br {
  border: 1px solid red;
}
body {
  margin: 0;
  padding: 0;
}
h1 {
  font-family: 'Roboto', sans-serif;
  color: #4076FF;
}
h2 {
  font-family: 'Roboto', sans-serif;
  color: #4076FF;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  // color: #fff;
}
button {
  font-family: 'Roboto', sans-serif;
  &:focus {
    outline: none !important;
  }
}
</style>
