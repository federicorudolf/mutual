<template>
  <div class="hello">
      <div class="homeBackground">
        <div class="slider">
          <div class="mask">
          </div>
          <app-slider></app-slider>
        </div>
    </div>
    <b-card-group deck class="cardContainer container">
      <app-cards v-for="(offer, index) in offers"
                 :key="offer.id"
                 v-bind="offer"
                 v-if="offers && offers.length > 0 && index <= limitationList"></app-cards>
    </b-card-group>
    <app-about></app-about>
  </div>
</template>

<script>
import Slider from '../components/Slider';
import Card from '../components/Card';
import aboutUs from '../components/aboutUs';

// Todo:
//      1) Carousel (el del mockup es owl carousel es un plugin)
//      2) Pulir el navbar (eliminar botones innecesarios, buscador, etc)
//      3) Popular data

export default {
  name: 'Home',
  data() {
    return {
      offers: this.$store.state.offers,
      limitationList: 2,
    };
  },
  components: {
    appSlider: Slider,
    appCards: Card,
    appAbout: aboutUs,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
  }
</style>
