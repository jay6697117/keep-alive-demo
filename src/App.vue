<template>
  <div id="app">
    <h1>cacheNames:{{ cacheNames }}</h1>
    <keep-alive :include="cacheNames">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  background-color: #ccc;
  padding: 20px 0;
}
</style>
