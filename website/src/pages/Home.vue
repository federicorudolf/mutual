<template>
  <div class="hello">
    <app-slider></app-slider>
    <div class="animated slideInRight delay-2s">
      <app-about></app-about>
    </div>
    <div class="c-cont animated slideInLeft delay-3s container">
      <h2>Convenios adheridos</h2>
      <b-row>
        <app-cards v-for="(offer, index) in offers"
                   :key="offer.id"
                   v-bind="offer"
                   v-if="offers && offers.length > 0 && index <= limitationList"></app-cards>
      </b-row>
    </div>
    <app-contact class="animated slideInRight delay-2s"></app-contact>
  </div>
</template>

<script>
import Slider from '../components/Slider';
import Card from '../components/Card';
import aboutUs from '../components/aboutUs';
import contactMe from '../components/contactMe';

// Todo:
//      1) Carousel (el del mockup es owl carousel es un plugin)
//      2) Pulir el navbar (eliminar botones innecesarios, buscador, etc)
//      3) Popular data

export default {
  name: 'Home',
  data() {
    return {
      offers: this.$store.state.offers,
      limitationList: 3,
    };
  },
  components: {
    appSlider: Slider,
    appCards: Card,
    appAbout: aboutUs,
    appContact: contactMe,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    padding-top: 55px;
  }
  .c-cont {
    padding: 60px 0;
  }

  .homepage.owl-carousel {
    display: flex;
  }
</style>
