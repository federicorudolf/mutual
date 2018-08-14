<template>
  <div id="app">
    <app-header></app-header>
    <router-view :key="$route.params.id"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import Header from './components/Header';
import Footer from './components/Footer';

Vue.use(VueAxios, axios);
Vue.use(Vuetify);

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style src="./styles/styles.scss" lang="scss">

</style>
