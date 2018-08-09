<template>
  <div class="container-contact">
    <app-head v-bind:title="title"></app-head>
    <div class="container">
      <b-form method="post"
              v-if="show">
        <b-form-group id="exampleInputGroup1"
                      label="Tu email:"
                      label-for="exampleInput1"
                      description="Tranquilo, no compartiremos tus datos con nadie!">
          <b-form-input id="exampleInput1"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Ingresa tu mail">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Tu nombre:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Ingresa tu nombre">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup3"
                      label="Tu empresa:"
                      label-for="exampleInput3">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.company"
                        required
                        placeholder="Ingresa tu empresa">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup4"
                      label="Telefono:"
                      label-for="exampleInput4">
          <b-form-input id="exampleInput4"
                        type="text"
                        v-model="form.phone"
                        required
                        placeholder="Ingresa tu telefono">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup5"
                      label="Tu mensaje:"
                      label-for="exampleInput5">
          <b-form-textarea required
                           placeholder="Ingresa tu mensaje">
          </b-form-textarea>
        </b-form-group>
        <b-form-group id="exampleGroup6">
          <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
            <b-form-checkbox value="me">Quiero asociarme como empresa</b-form-checkbox>
            <b-form-checkbox value="that">Quiero asociarme como individuo</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary" class="btn btn-template-main" @click="send()">Enviar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import headingTitle from '../components/headingTitle';
import axios from 'axios';

export default {
  data() {
    return {
      title: 'Contactenos',
      form: {
        email: '',
        name: '',
        company: '',
        phone: '',
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    send() {
      console.log("TE ENVIE");
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  components: {
    appHead: headingTitle,
  }
};
</script>

<style lang="scss" scoped>
  .container {
    margin: 20px auto;
  }

  .container-contact {
    padding-top: 55px;
  }

  textarea {
    min-height: 250px;
  }
</style>
