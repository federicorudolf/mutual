<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

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
