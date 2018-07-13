<template>
  <div class="hello">
    <span> Hello </span>
    <app-header></app-header>
    <app-slider></app-slider>
  </div>
</template>

<script>
import Header from '../components/Header';
import Slider from '../components/Slider';

export default {
  name: 'Slider',
  data() {
    return {
      msg: 'Slider Works!',
    };
  },
  components: {
    appHeader: Header,
    appSlider: Slider,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
