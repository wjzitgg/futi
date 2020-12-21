<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 html,
  body,
  #app,
  .wrapper {
    width: 100%;
    height: 100%;
  }
 a {
    text-decoration: none;
  }
</style>
