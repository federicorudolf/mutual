<template>
  <div class="container-contact">
    <app-head v-bind:title="title"></app-head>
    <div class="container">
      <b-form>
        <b-form-group id="exampleInputGroup1"
                      label="Tu email:"
                      label-for="exampleInput1"
                      description="Tranquilo, no compartiremos tus datos con nadie!">
          <b-form-input id="exampleInput1"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Ingresa tu mail"
                        name="email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Tu nombre:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Ingresa tu nombre"
                        name="name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup3"
                      label="Tu empresa:"
                      label-for="exampleInput3">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.company"
                        required
                        placeholder="Ingresa tu empresa"
                        name="company">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup4"
                      label="Telefono:"
                      label-for="exampleInput4">
          <b-form-input id="exampleInput4"
                        type="text"
                        v-model="form.phone"
                        required
                        placeholder="Ingresa tu telefono"
                        name="phone">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup5"
                      label="Tu mensaje:"
                      label-for="exampleInput5">
          <b-form-textarea required
                           placeholder="Ingresa tu mensaje"
                           v-model="form.message"
                           name="message">
          </b-form-textarea>
        </b-form-group>
        <b-form-group id="exampleGroup6">
          <b-form-checkbox-group name="checked" v-model="form.checked" id="exampleChecks">
            <b-form-checkbox value="Quiero asociarme como empresa">
              Quiero asociarme como empresa</b-form-checkbox>
            <b-form-checkbox value="Quiero asociarme como individuo">
              Quiero asociarme como individuo</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button variant="primary"
                  class="btn btn-template-main"
                  @click="send();">Enviar</b-button>
      </b-form>
    </div>
    <v-snackbar
      v-bind:class="stateColor"
      v-model="snackbar"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :vertical="mode === 'vertical'">
      {{text}}
      <v-btn
        dark
        flat
        @click="snackbar = false">
        Cerrar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import headingTitle from '../components/headingTitle';
var FormData = require('form-data');
var qs = require('qs');
var data = new FormData();

export default {
  data() {
    return {
      title: 'Contactenos',
      snackbar: false,
      color: '',
      mode: '',
      stateColor: '',
      timeout: 6000,
      text: '',
      form: {
        email: '',
        name: '',
        company: '',
        phone: '',
        message: '',
        checked: [],
      },
      show: true,
      configHeaders: '',
    };
  },
  methods: {
    send() {
      this.text = 'Su formulario está siendo enviado';
      this.color = 'info';
      this.snackbar = true;
      this.stateColor = "process";
      this.configHeaders = {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      };

      var form = {
        'email' : this.form.email,
        "name" : this.form.name,
        "company" : this.form.company,
        "phone" : this.form.phone,
        "message" : this.form.message,
        "checked" : this.form.checked,
      };

      this.axios.post('http://unidadprimerodenoviembre.com/contacto/contact.php',
      qs.stringify(form),
      this.configHeaders)
      .then((res) => {
        // eslint-disable-next-line
        console.log(res);
        console.log(form);
        if(res) {
          this.text = 'El formulario se ha enviado con exito';
          this.stateColor = "success";
          this.color = 'success';
          this.snackbar = true;
        setTimeout(() => {
            this.form.name = '';
            this.form.email = '';
            this.form.company = '';
            this.form.phone = '';
            this.form.checked = [];
            this.form.message = '';
          }, 1000)
        }

      }).catch((error) => {
        // eslint-disable-next-line
        console.log(error);
        this.text = 'Hubo un error al enviar su formulario. Intente nuevamente mas tarde';
        this.stateColor = "error"
        this.color = 'error';
        this.snackbar = true;
      });
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
  components: {
    appHead: headingTitle,
  },
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
