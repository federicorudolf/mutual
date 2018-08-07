<template>
  <div>
    <div class="container">
      <b-row>
        <b-col class="img-c">
          <img :src="imgSrc"/>
        </b-col>
        <b-col>
          <h2>{{ title }}</h2>
          <blockquote class="blockquote blockquote-reverse">
            <p>{{ description }}</p>
            <h4>Beneficios</h4>
            <footer class="blockquote-footer"> {{beneficio}} </footer>
          </blockquote>
          <div class="direction">
            <h4>Direccion</h4>
            <i class="fas fa-map-marker-alt"></i>{{ location }}
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    title: '',
    imgSrc: '',
    description: '',
    location: '',
    beneficio: '',
    field: '',
    id: '',
  },
};
</script>
<style lang="scss" scoped>
i {
  color: #3386ff;
  margin-right: 5px;
}

.direction {
  background: #f3f3f3;
  padding: 15px;
}
</style>
