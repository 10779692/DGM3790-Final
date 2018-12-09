<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <router-view/>
    <app-footer style="position:fixed"></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/Global/AppFooter'
import AppToolbar from './components/Global/AppToolbar'
export default {
  name: 'App',
  components:{AppToolbar,AppFooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  font-size: 16px;
  text-align: left;
}
h3 {
  font-size: 26px;
  text-align: left;
}
h1 {
  text-align: center;
}
</style>
