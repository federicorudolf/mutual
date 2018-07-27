<template>
  <div class="container">
      <app-head v-bind:title="title"></app-head>
      <section v-if="items.length > 0">
        <div class="container">
          <b-row v-for="item in items" :key="item.id">
            <b-col>
              <img :src="item.Image" />
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
        </div>
      </section>
      <h1 v-else> {{ emptyMessage }} </h1>
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
      emptyMessage: 'Por ahora no hay convenios para este rubro!',
    };
  },
  watch: {
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
  created() {
    this.title = this.$route.params.id;
    this.updateData();
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
</style>
