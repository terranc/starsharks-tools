<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <NavMenu />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import NavMenu from './components/NavMenu'

export default {
  name: 'App',
  components: {
    NavMenu,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
