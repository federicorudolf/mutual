<template>
  <div class="hello">
    <app-slider></app-slider>
    <div class="animated slideInRight delay-2s">
      <app-about></app-about>
    </div>
    <div class="c-cont animated slideInLeft delay-3s container">
      <h2>Rubros y beneficios</h2>
      <b-row class="v-cards-r">
        <b-col>
          <v-layout>
              <v-card>
                <v-card-media class="box-image">
                  <img class="img-fluid" src="https://www.viajejet.com/wp-content/viajes/los-ingredientes-basicos-de-la-gastronomia-espanola-1440x810.jpg" />
                  <div class="overlay d-flex align-items-center justify-content-center">
                    <a href="#"
                       class="btn btn-template-outlined-white"
                       @click="navigateToField('gastronomia')">
                       <i class="fas fa-book"></i>Leer mas
                    </a>
                  </div>
                </v-card-media>
                <v-card-title>
                  <div class="v-card-title__item">
                    <h4><i class="fas fa-utensils"></i>Gastronomia</h4>
                  </div>
                </v-card-title>
              </v-card>
          </v-layout>
        </b-col>
        <b-col>
          <v-layout>
              <v-card>
                <v-card-media class="box-image">
                  <img class="img-fluid" src="https://geomarketing.com/wp-content/uploads/2016/11/Holiday-shopping-mobile-1.jpg" />
                  <div class="overlay d-flex align-items-center justify-content-center">
                    <a href="#"
                       class="btn btn-template-outlined-white"
                       @click="navigateToField('indumentaria')">
                       <i class="fas fa-book"></i>Leer mas
                    </a>
                  </div>
                </v-card-media>
                <v-card-title>
                  <div>
                    <h4><i class="fas fa-tshirt"></i>Indumentaria</h4>
                  </div>
                </v-card-title>
                <v-card-actions></v-card-actions>
              </v-card>
          </v-layout>
        </b-col>
        <b-col>
          <v-layout>
              <v-card>
                <v-card-media class="box-image">
                  <img class="img-fluid" src="https://frasesdelavida.com/wp-content/uploads/2018/01/Frases-de-deportes.jpg" />
                  <div class="overlay d-flex align-items-center justify-content-center">
                    <a href="#"
                       class="btn btn-template-outlined-white"
                       @click="navigateToField('deportes')">
                       <i class="fas fa-book"></i>Leer mas
                    </a>
                  </div>
                </v-card-media>
                <v-card-title>
                  <div>
                    <h4><i class="fas fa-futbol"></i>Deportes</h4>
                  </div>
                </v-card-title>
                <v-card-actions></v-card-actions>
              </v-card>
          </v-layout>
        </b-col>
        <b-col>
          <v-layout>
              <v-card>
                <v-card-media class="box-image">
                  <img class="img-fluid" src="http://www.hotelroomsearch.net/im/hotels/es/shopping-center-1.jpg" />
                  <div class="overlay d-flex align-items-center justify-content-center">
                    <a href="#"
                       class="btn btn-template-outlined-white"
                       @click="navigateToField('otros')">
                       <i class="fas fa-book"></i>Leer mas
                    </a>
                  </div>
                </v-card-media>
                <v-card-title>
                  <div>
                    <h4><i class="fas fa-cart-arrow-down"></i>Varios</h4>
                  </div>
                </v-card-title>
                <v-card-actions></v-card-actions>
              </v-card>
          </v-layout>
        </b-col>
        <div class="button-field">
          <router-link to="/convenios"
                           tag="button"
                           class="btn btn-template-main"
                           active-class="active">
                           <i class="fab fa-wpforms"></i> Ver mas rubros..
          </router-link>
        </div>
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
  methods: {
    navigateToField(field) {
      this.$router.push(`/rubro/${field}`);
    },
  },
  components: {
    appSlider: Slider,
    appCards: Card,
    appAbout: aboutUs,
    appContact: contactMe,
  },
  created() {
    window.scrollTo(0, 0);
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

  .v-card__title {
    justify-content: center;
  }

  .v-card__title i {
    margin-right: 5px;
  }
</style>
