<template>
  <div class="container">
    <b-card-group>
      <app-conv v-bind="convenio"></app-conv>
    </b-card-group>
  </div>
</template>

<script>
import conv from '../components/conv';

export default {
  name: 'Convenio',
  data() {
    return {
      id: this.$route.params.id,
      convenio: {},
    };
  },
  components: {
    appConv: conv,
  },
  created() {
    this.convenio = this.$store.state.offers.filter(item => item.id === this.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top: 60px;
    margin-bottom: 60px;
  }
</style>
