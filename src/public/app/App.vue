<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
  background-color:none;
}

button {
  color:black;
  fill:none;
  background-color: #FFF;
  color:black;
  border: 2px solid #000;
  font-size: 12px;
  padding: 10px;

}

button:hover {
  background-color:#F5F3EE;

}
img {
  width:200px;
}
</style>