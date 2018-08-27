<!-- eslint-disable -->
<template>
  <div class="convenio-c">
    <app-head v-bind:title="title"></app-head>
    <div class="container">
      <b-card-group class="conv-c">
        <app-conv v-bind="convenio"></app-conv>
      </b-card-group>
      <div class="conv-desc">
        <div class="conv-desc-c">
          <i class="fas fa-info-circle"></i>
          <h4>Acceso al beneficio</h4>
        </div>
        <p class="paragraph-desk">
          Descuento exclusivo para trabajadores de empresas adherentes a la Asociacion Mutual Unidad 1° de Noviembre,
        </p>
        <p class="paragraph-desk">
          que se identifiquen con su carnet y ultimo recibo de sueldo.
        </p>

        <p class="paragraph-mob">
          Descuento exclusivo para trabajadores de empresas adherentes a la Asociacion Mutual Unidad 1° de Noviembre, que se identifiquen con su carnet y ultimo recibo de sueldo.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headingTitle from '../components/headingTitle';
import conv from '../components/conv';

export default {
  name: 'Convenio',
  data() {
    return {
      title: 'Convenio Adherido',
      id: this.$route.params.id,
      convenio: {},
    };
  },
  components: {
    appHead: headingTitle,
    appConv: conv,
  },
  created() {
    this.convenio = this.$store.state.offers.filter(item => item.id === this.id);
    window.scrollTo(0, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top: 100px;
    margin-bottom: 60px;
  }
  .conv-desc {
    background-color: #3386ff;
    color: #FFF;
    padding: 15px;
    margin-top: 15px;
    text-transform: uppercase;
  }

  .conv-desc i {
    font-size: 35px;
  }
  .conv-desc p {
    text-align: center;
    margin-top: 10px;
  }

  .conv-desc h4 {
    padding-top: 10px;
    padding-left: 10px;
  }

  .conv-desc-c {
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .convenio-c {
    padding-top: 55px;
  }

  .conv-desc p {
    margin: 0;
  }
</style>
