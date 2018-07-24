<template>
  <div class="container">
      <app-head v-bind:title="title"></app-head>
      <b-table v-if="items.length > 0" :items="items"></b-table>
      <h1 v-else> {{ emptyMessage }} </h1>
  </div>
</template>
<script>
import headingTitle from '../components/headingTitle';

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
          this.items.push(newItem);
        }
      });
    },
  },
  components: {
    appHead: headingTitle,
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
</style>

