<template>
  <main>
    <div class="background-image" :style="backgroundImageStyle" />
    <img :src="logo" class="logo"/>
    <div class="container">      
      <div class="title">
      <h1>Work in Progress</h1>
      <p>Il sito sarà presto disponibile</p>
      </div>
    </div>
  </main>
</template>

<script>
import oliver from '@/assets/oliver.jpg'
import logo from '@/assets/logo.png'

export default {
  name: "Home",
  data(){
    this.oliver = oliver
    this.logo = logo
    return {}
  },
  computed: {
    backgroundImageStyle() {
      return {"background-image": `url(${this.oliver}`}
    }
  }
}
</script>

<style lang="css" scoped>

main {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
}

.background-image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}

.container {
  display: flex;
  align-items: center;
}

.logo {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 150px; 
}

.title {
  color: white;
  z-index: 1;
}


.background-image::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
}
</style>
