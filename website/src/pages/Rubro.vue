<template>
  <div class="container">
      <app-head v-bind:title="title"></app-head>
      <div class="search-container">
        <v-text-field
          v-model="search"
          label="¿Que estas buscando?"
        ></v-text-field>
      </div>
      <section v-if="filterConvs.length > 0">
        <div class="container">
          <b-row class="r_row" v-for="item in filterConvs" :key="item.id">
            <b-col class="r-col">
              <div class="box-image">
                <img :src="item.Image" />
                <div class="overlay align-items-center justify-content-center d-flex">
                  <div class="content">
                    <div class="buttons">
                      <button class="btn btn-template-outlined-white" @click="loadOffer(item.Id)">
                        <i class="fas fa-book"></i>Leer mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col>
              <h2>{{item.Empresa}}</h2>
              <p>{{item.Descripcion}}</p>
              <button class="btn btn-template-outlined"
                      @click="loadOffer(item.Id)">
                      <i class="fas fa-book"></i>
                      Leer mas</button>
            </b-col>
          </b-row>
          <b-row class="mob-r">
            <b-col class="mob-card" v-for="item in filterConvs" :key="item.id">
              <v-layout>
                  <v-card>
                    <v-card-media class="box-image">
                      <img :src="item.Image" />
                      <div class="overlay align-items-center justify-content-center d-flex">
                        <div class="content">
                          <div class="buttons">
                            <button class="btn btn-template-outlined-white" @click="loadOffer(item.Id)">
                              <i class="fas fa-book"></i>Leer mas
                            </button>
                          </div>
                        </div>
                      </div>
                    </v-card-media>
                    <v-card-title>
                      <div>
                        <h2>{{item.Empresa}}</h2>
                        <p>{{item.Descripcion}}</p>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="blue" @click="loadOffer(item.Id)"><i class="fas fa-book"></i>Leer mas</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-layout>
            </b-col>
          </b-row>
        </div>
      </section>
      <div v-else>
        <div class="conv-alert">
          <div class="conv-alert-c">
            <i class="fas fa-info-circle"></i>
            <h4>No se encuentran convenios adheridos</h4>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import headingTitle from '../components/headingTitle';
import card from '../components/Card';

export default {
  data() {
    return {
      title: '',
      items: [],
      search: '',
      emptyMessage: 'Por ahora no hay convenios para este rubro!',
    };
  },
  methods: {
    updateData() {
      this.items = [];
      const field = this.$route.params.id;
      this.$store.state.offers.forEach((item) => {
        const itemField = item.field.toLowerCase();
        const newItem = {};
        if (itemField === field) {
          newItem.Empresa = item.title;
          newItem.Descripcion = item.description;
          newItem.Ciudad = item.location;
          newItem.Rubro = item.field;
          newItem.Image = item.imgSrc;
          newItem.Id = item.id;
          this.items.push(newItem);
        }
      });
    },
    loadOffer(id) {
      this.$router.push(`/convenio/${id}`);
    },
  },
  components: {
    appHead: headingTitle,
    appCard: card,
  },
  computed: {
    filterConvs: function() {
      return this.items.filter((item) => {
        return item.Empresa.toLowerCase().match(this.search);
      });
    }
  },
  created() {
    this.title = this.$route.params.id;
    this.updateData();
    window.scrollTo(0, 0);
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 60px 0 0 0;
  margin: 0 auto;
}
.row {
  padding: 20px;
  margin: 20px 0;
}
h2 {
  text-transform: uppercase;
}
h2:after {
  content: " ";
  display: block;
  width: 100px;
  height: 2px;
  margin-top: .6rem;
  background: #1986ff;
}
i {
  margin-right: 5px;
}
.box-image {
  margin: 0;
}
img {
  width: 100%;
  height: auto;
}

.conv-alert {
  border: 3px solid #d20000;
  background-color: #ff4444;
  padding: 100px;
  color: #FFF;
  margin: 100px 50px;
}

.conv-alert i {
  font-size: 35px;
}

.conv-alert h4 {
  padding-top: 10px;
  padding-left: 10px;
  text-transform: uppercase;
}

.conv-alert-c {
  display: inline-flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.convenio-c {
  padding-top: 55px;
}

.search-container {
  background: #03A9F4;
  padding: 20px;
  color: #FFF;
}
</style>
