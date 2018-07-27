<template>
  <div>
    <div class="container">
      <b-row>
        <b-col>
          <img :src="imgSrc"/>
        </b-col>
        <b-col>
          <h2>{{title}}</h2>
          <blockquote class="blockquote blockquote-reverse">
            <p>{{description}}</p>
            <footer class="blockquote-footer">Someone famous in
              <cite title="Source Title">Source Title</cite>
              </footer>
          </blockquote>
          <i class="fas fa-map-marker-alt"></i>{{ location }}
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
</style>
