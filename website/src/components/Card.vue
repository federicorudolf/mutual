<template>
  <div class="card-container"
       @click="loadOffer(id)">
    <b-badge class="cardBadge">{{ field }}</b-badge>
    <b-card :title="title"
            :img-src="imgSrc"
            img-top>
        <div class="container-text">
          <p class="card-text">
              {{ description }}
          </p>
        </div>
        <div slot="footer">
            <small class="text-muted"><i class="fas fa-map-marker-alt"></i>{{ location }}</small>
        </div>
    </b-card>
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
  methods: {
    loadOffer(id) {
      this.$router.push(`/convenio/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
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
    left: 1px;
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
    max-width: 100%;
    height: auto;
  }
</style>
