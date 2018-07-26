<template>
  <div class="container">
    <b-card-group>
      <app-card v-bind="convenio"></app-card>
    </b-card-group>
  </div>
</template>

<script>
import card from '../components/Card';

export default {
  name: 'Convenio',
  data() {
    return {
      id: this.$route.params.id,
      convenio: {},
    };
  },
  components: {
    appCard: card,
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
