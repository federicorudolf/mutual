<template>
  <div class="homepage owl-carousel">
    <div class="item">
      <img src="../assets/slide001.png" />
    </div>
    <div class="item">
      <img src="../assets/slide002.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
    };
  },
  methods: {
    carousel() {
      // eslint-disable-next-line
      $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        navigation: true,
        autoplay: true,
      });
    },
  },
  mounted() {
    this.carousel();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-carousel {
  color: #fff;
}

.home-carousel .owl-carousel {
  padding-top: 60px;
  padding-bottom: 20px;
}

.home-carousel h1, .home-carousel h2 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-carousel li, .home-carousel p {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.home-carousel p img {
  max-width: 200px;
}

.dark-mask {
  background: rgba(30, 100, 193, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.dark-mask.mask-primary {
  background: rgba(79, 191, 168, 0.9);
}

.home-carousel {
  color: #fff;
}

.home-carousel .owl-carousel {
  padding-top: 60px;
  padding-bottom: 20px;
}

.home-carousel h1, .home-carousel h2 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-carousel li, .home-carousel p {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.home-carousel p img {
  max-width: 200px;
}

.owl-carousel .owl-dots {
  margin-top: 20px;
  text-align: center;
}

.owl-carousel .owl-dots .owl-dot {
  display: inline-block;
  margin: 0 5px;
}
.owl-carousel .owl-dots .owl-dot.active span {
  background: #fff;
}

.owl-carousel .owl-dots .owl-dot span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #aaa;
}

.ko-h,
.no-end,
.m-z {
  border-radius: 5px;
  padding: 10px;
}

.ko-h,
.circle.ko-ch {
  background-color: #e74c3c;
}

.no-end,
.circle.no-cend {
  background-color: #000;
}

.m-z,
.circle.m-cz {
  background-color: #3498db;
}
.col-md-5 h1,
.col-md-5 p {
  text-align: center;
}

.col-md-5 .zone {
  max-width: 55%;
  margin: 0 auto;
}

.owl-carousel .owl-dots .owl-dot.active span {
  background: #fff;
}

.circle {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 auto 40px;
}
</style>
