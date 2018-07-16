<template>
  <div class="hello">
    <div class="slider">
      <app-slider></app-slider>
    </div>
    <b-card-group deck class="cardContainer">
      <app-cards v-for="offer in offers"
                 v-bind="offer"></app-cards>
    </b-card-group>
  </div>
</template>

<script>
import Slider from '../components/Slider';
import Card from '../components/Card';

export default {
  name: 'Home',
  data() {
    return {
      offers: this.$store.state.offers,
    };
  },
  components: {
    appSlider: Slider,
    appCards: Card,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    background-color: coral;
  }
  .cardContainer {
    height: 100vw;
    overflow-y: scroll;
    padding: 20px;
    margin: 0 10px;
    background-color: blue;
  }
  .slider {
    width: 80%;
    margin: 0 auto;
  }
</style>
