<template>
  <b-col class="card-content">
    <div class="card-container"
         @click="loadOffer(id)">
      <div class="home-blog-post">
        <b-badge class="cardBadge">{{ field }}</b-badge>
        <div class="box-image">
          <img :src="imgSrc" />
          <div class="overlay d-flex align-items-center justify-content-center">
            <a href="#" class="btn btn-template-outlined-white"><i class="fas fa-book"></i>Leer mas</a>
          </div>
        </div>
        <div class="text">
          <h4>{{title}}</h4>
          <p class="intro">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </b-col>
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
  methods: {
    loadOffer(id) {
      this.$router.push(`/convenio/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
  .image {
    position: relative;
    margin-bottom: 15px;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .text {
    text-align: center;
  }
  h4 {
    margin: 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #1986ff;
  }
  .author-category {
    font-size: 0.75rem;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .intro {
    text-align: center;
    margin-bottom: 20px;
    color: #888;
    font-size: 0.9rem;
  }
  .card-container {
    position: relative;
  }
  .cardBadge {
    background-color: #1986ff;
    padding: 20px;
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom:20px;
    position: absolute;
    top: 30px;
    left: -15px;
    z-index: 1;
    cursor: pointer;
  }
  .cardBadge:after {
    content: '';
    border-top: 15px solid #1986ff;
    border-left: 15px solid transparent;
    border-right: 0 solid transparent;
    position: absolute;
    bottom: -13px;
    left: 0;
    display: block;
  }
  .text-muted i {
    margin-right: 5px;
    color: #1986ff;
  }
  .card {
    overflow: hidden;
  }
  .card:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .card img {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    height: auto;
  }

  i {
    margin-right: 5px;
  }
</style>
