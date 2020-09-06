<template>
  <div class="card">
    <h3>Oliver</h3>
    <div :style="backgroundImageStyle">
      <div class="on-hover-background" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    image: {
      required: true,
      type: String
    }
  },
  computed: {
    backgroundImageStyle () {
      return {'background-image': `url(${this.image}`}
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  min-height: 150px;
  color: white;
  position: relative;

  h3 {
    position: absolute;
    z-index: 3;
    display: none;
  }

  &:hover {
    h3 {
      display: block;
    }
  }

  & > div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center 70%;
    background-color: black;
    transition: transform .2s;
    z-index: 1;
    position: relative;
    color: transparent;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    & > .on-hover-background {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0);
      width: 100%;
      height: 100%;
      transition: background-color .2s;
      z-index: 1;
    }

    &:hover {
      transform: scale(1.2);
      z-index: 2;
      color: white;

      .on-hover-background {
        background-color: rgba(0, 0, 0, .3);
      }
    }
  }
}
</style>