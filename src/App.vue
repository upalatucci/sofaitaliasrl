<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',
  components: { Home }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Montserrat',sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f4f4f4;
}

a {
  color: #BE1522;
  text-decoration: none;
}

a:focus {
  color: #a0131c;
}

a:active {
  color: #BE1522;
}

a:focus {
  text-decoration: underline;
}


.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity .5s;
}

.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
}
</style>
