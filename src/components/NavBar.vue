<template>
  <nav>
    <img :src="logo" class="logo"/>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/">Prodotti</router-link>
    </div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: "NavBar",
  data() {
    this.logo = logo
    return {}
  }
}
</script>

<style lang="scss">
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  z-index: 1024;
  flex-direction: column;
}

nav .logo {
  width: 150px;
}

nav .links > * {
  margin: 0 1rem;
  font-size: 20px;
}

nav a {
  color: white;

  &:active {
    text-decoration: underline white;
  }

  &:focus {
    color: white;
  }

  &:hover {
    color: #d2d2d2;
  }
}


@media screen and (min-width: $small) {
  nav {
    flex-direction: row;
  }
}
</style>